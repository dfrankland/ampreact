import 'babel-polyfill';
import path from 'path';
import PrettyError from 'pretty-error';
import spdy from 'spdy';
import Koa from 'koa';
import compress from 'koa-compress';
import helmet from 'koa-helmet';
import serveStatic from 'serve-static';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import amphtml from 'react-amphtml';
import purify from 'purify-css';
import key from './ssl/key.pem';
import cert from './ssl/cert.pem';
import { port } from './config';
import routes from './routes';
import ContextHolder from './components/lib/ContextHolder';
import { analytics, defaultMarkup as markup, protocol } from './config';
import mainTemplate from './views/index.jade';
import errorTemplate from './views/error.jade';

const DEBUG = process.env.NODE_ENV !== 'production';
const app = new Koa();
const serve = serveStatic(path.join(__dirname, '/public'));
const pe = new PrettyError();
pe.skipNodeFiles();

/* eslint-disable no-param-reassign*/
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(pe.render(err)); // eslint-disable-line no-console
    const statusCode = err.status || 500;
    ctx.status = statusCode;
    ctx.body = errorTemplate(
      {
        message: err.message,
        stack: !DEBUG ? '' : err.stack,
      }
    );
  }
});

app.use(helmet());
app.use(compress());

app.use(async (ctx, next) => {
  if (ctx.status === 404) ctx.status = 200;
  ctx.respond = false;
  try {
    await new Promise((resolve, reject) => {
      serve(ctx.req, ctx.res, reject);
    });
  } catch (err) {
    ctx.respond = true;
    await next();
  }
});

app.use(async ctx => {
  const matches = await new Promise((resolve, reject) => {
    match({ routes, location: ctx.url }, (err, redirectLocation, renderProps) =>
      err ? reject(err) : resolve({ redirectLocation, renderProps })
    );
  });

  const { redirectLocation, renderProps } = matches;

  if (redirectLocation) {
    const { pathname, search } = redirectLocation;
    const redirectPath = pathname + search;
    ctx.redirect(redirectPath);
    ctx.body = `Redirecting to ${redirectPath}`;
    return;
  }

  const data = { title: '', description: '', css: '', body: '', ampScripts: [] };

  /* eslint-disable no-return-assign*/
  const context = {
    insertCss: styles => data.css += styles._getCss(),
    setTitle: value => data.title = value,
    setDescription: value => data.description = value,
    setMarkup: {
      headline: value => markup.headline = value,
      description: value => markup.description = value,
      datePublished: value => markup.datePublished = value,
      dateModified: value => markup.dateModified = value,
      image: (url, width, height) => markup.image = { ...markup.image, url, width, height },
      author: value => markup.author.name = value,
    },
    set404: () => ctx.status = 404,
    getAmpHtml: directive => amphtml(directive, script => data.ampScripts.push(script)),
  };
  /* eslint-enable no-return-assign*/

  data.body = renderToStaticMarkup(
    <ContextHolder context={context}>
      <RouterContext {...renderProps} />
    </ContextHolder>
  );

  markup.mainEntityOfPage['@id'] = ctx.href;
  if (!markup.headline) markup.headline = data.title;
  if (!markup.description) markup.description = data.description;
  if (!markup.datePublished) markup.datePublished = new Date().toISOString();
  if (!markup.dateModified) markup.dateModified = new Date().toISOString();
  data.markup = JSON.stringify(markup);

  data.css = purify(data.body, data.css, { minify: !DEBUG });
  data.canonical = ctx.href;
  if (!DEBUG) {
    data.trackingCode = JSON.stringify(analytics.google);
    context.getAmpHtml('analytics');
  }

  ctx.body = mainTemplate(data);
});
/* eslint-enable no-param-reassign*/

spdy
  .createServer({ key, cert, spdy: { plain: protocol === 'http' } }, app.callback())
  /* eslint-disable no-console */
  .listen(port, () => console.log(`The server is running at ${protocol}://localhost:${port}/`));

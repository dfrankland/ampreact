import React from 'react';
import Document from 'next/document';
import {
  AmpScripts,
  AmpScriptsManager,
  headerBoilerplate,
  whitelist,
} from 'react-amphtml';

// This is only needed for react@<16.0.0 & react-dom@<16.0.0
// Whitelists the `amp-` and `custom-elements` attributes
whitelist();

export default class MyDocument extends Document {
  static getInitialProps({ req, renderPage }) {
    const ampScripts = new AmpScripts();

    const page = renderPage((
      App => props => (
        <AmpScriptsManager ampScripts={ampScripts}>
          <App {...props} />
        </AmpScriptsManager>
      )
    ));

    const ampScriptTags = ampScripts.getScriptElements();

    const title = (
      page.head.filter(({ type }) => type === 'title')[0] ||
      <title>react-amphtml</title>
    );

    return { ...page, title, url: req.url, ampScriptTags };
  }

  render() {
    const { title, url, ampScriptTags, html } = this.props;

    /* eslint-disable react/no-danger */
    return (
      <html lang="en" amp="">
        <head>
          {title}
          {headerBoilerplate(url)}
          {ampScriptTags}
        </head>
        <body dangerouslySetInnerHTML={{ __html: html }} />
      </html>
    );
    /* eslint-enable */
  }
}

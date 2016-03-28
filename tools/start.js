import Browsersync from 'browser-sync';
import webpack from 'webpack';
import run from './run';
import webpackConfig from './webpack.config';
import clean from './clean';
import copy from './copy';
import runServer from './runServer';
import { protocol, host } from '../src/config';

const DEBUG = !process.argv.includes('--release');

const bs = Browsersync.create();

const bsOptions = {
  ...(DEBUG ? {} : { notify: false, ui: false }),
  proxy: {},
  files: ['build/content/**/*.*'],
  logFileChanges: false,
};

async function start() {
  await run(clean);
  await run(copy.bind(undefined, { watch: true }));
  webpack(webpackConfig).watch({}, (wpError, stats) => {
    if (wpError) {
      console.error(wpError); // eslint-disable-line no-console
      return;
    }

    console.log(stats.toString(webpackConfig.stats)); // eslint-disable-line no-console

    if (DEBUG && !bs.active) {
      runServer(() => {
        bsOptions.proxy.target = `${protocol}://${host}`;
        bs.init(bsOptions);
      });
    } else {
      runServer(bs.reload);
    }
  });
}

export default start;

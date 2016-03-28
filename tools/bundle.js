import webpack from 'webpack';
import webpackConfig from './webpack.config';

/**
 * Creates application bundles from the source files.
 */
async function bundle() {
  return await new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        console.log(err); // eslint-disable-line no-console
        return reject(err);
      }

      console.log(stats.toString(webpackConfig.stats)); // eslint-disable-line no-console
      return resolve();
    });
  });
}

export default bundle;

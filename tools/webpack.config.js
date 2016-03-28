import path from 'path';
import webpack from 'webpack';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
};

const config = {
  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },

  context: path.resolve(__dirname, '../src'),
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, '../build/public/assets'),
    publicPath: '/assets/',
    sourcePrefix: '  ',
    filename: '../../server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({ ...GLOBALS, 'process.env.BROWSER': false }),
    new webpack.BannerPlugin('require("source-map-support").install();',
      { raw: true, entryOnly: false }),
  ],
  externals: [
    /^\.\/assets$/,
    function filter(context, request, cb) {
      const isExternal =
        request.match(/^[@a-z][a-z\/\.\-0-9]*$/i) &&
        !request.match(/^react-routing/) &&
        !context.match(/[\\/]react-routing/);
      cb(null, Boolean(isExternal));
    },
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        loader: 'babel-loader',
      }, {
        test: /\.scss$/,
        loaders: [
          'isomorphic-style-loader',
          `css-loader?${DEBUG ? 'sourceMap&' : 'minimize&'}modules&localIdentName=` +
          `${DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]'}`,
          'postcss-loader?parser=postcss-scss',
        ],
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.(txt|key|crt|pem)$/,
        loader: 'raw-loader',
      }, {
        test: /\.svg$/,
        loaders: [
          'babel-loader',
          'react-svg-loader',
          'image-webpack-loader',
        ],
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loaders: [
          'file-loader',
          'image-webpack-loader?' +
          '{bypassOnDebug: true, progressive:true, optimizationLevel: 7, interlaced: false}',
        ],
      }, {
        test: /\.(woff|woff2|eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      }, {
        test: /\.jade$/,
        loader: 'jade-loader',
      },
    ],
  },

  postcss: function plugins(bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('precss')(),
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
    ];
  },

};

export default config;

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.config.common');

const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(commonConfig, {

  /**
   * Developer tool to enhance debugging
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: 'cheap-module-source-map',

  /**
   * Switch loaders to debug mode.
   *
   * See: http://webpack.github.io/docs/configuration.html#debug
   */
  debug: true,
});

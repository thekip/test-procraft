const webpack = require('webpack');
const bem = require('bem-jade');
const autoprefixer = require('autoprefixer');
const SvgStore = require('webpack-svgstore-plugin');

const projectDir = __dirname;

/**
 * Webpack Plugins
 */
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendors: './src/js/vendors.ts',
    app: './src/js/app.ts',
  },

  output: {

    /**
     * The output directory as absolute path (required).
     *
     * See: http://webpack.github.io/docs/configuration.html#output-path
     */
    path: projectDir + '/dst',

    /**
     * Specifies the name of each output file on disk.
     * IMPORTANT: You must not specify an absolute path here!
     *
     * See: http://webpack.github.io/docs/configuration.html#output-filename
     */
    filename: '[name].js',
    publicPath: "/",
  },
  externals: {
    angular: "angular",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      chunks: ['vendors', 'app'],
    }),
    new HtmlWebpackPlugin({ template: 'src/index.html', inject: false }),
    new SvgStore({
      prefix: ''
    }),
  ],

  resolve: {

    /*
     * An array of extensions that should be used to resolve modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
     */
    extensions: ['', '.ts', '.js', '.json'],

    // Make sure root is src
    root: projectDir + 'src',
    // remove other default values
    modulesDirectories: ['node_modules'],

  },

  module: {
    loaders: [
      {
        test: /\.[tj]s$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jade$/,
        loader: 'raw-loader!jade-html',
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader?sourceMap!postcss-loader!sass-loader?sourceMap",
      }
    ],
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ];
  },
  jadeLoader: {
    basedir: projectDir,
    locals: {
      bem: bem({
        prefix: '',
        element: '__',
        modifier: '--',
        default_tag: 'div',
      })
    },
  }
};

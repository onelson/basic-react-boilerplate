require('es6-promise').polyfill();  // needed for node versions < 0.12
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var HOST = process.env.HOST || 'localhost';
var PORT = process.env.PORT || '3000';

var LOCAL_DEV = process.env.NODE_ENV === 'development' || false;
if (LOCAL_DEV) { // note: any truthy value will result in this being true.
  console.warn('configuring for local dev');
}

var definePlugin = new webpack.DefinePlugin({
  // TODO: read settings from a file here so we can configure deployments
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  },
  'global.settings': {
    SERVER_ROOT: JSON.stringify(process.env.SERVER_ROOT || 'http://localhost:4000')
  }
});

var entryPoints = {
  bundle: './src/scripts/app',
  styles: './src/styles/main.less'
};

module.exports = {
  HOST: HOST,
  PORT: PORT,
  entry: entryPoints,
  plugins: [
    definePlugin,
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      drop_debugger: false,
      compress: {
        warnings: false
      }
    })
  ],
  devtool: LOCAL_DEV ? 'cheap-module-eval-source-map' : 'source-map',
  output: {
    path: path.resolve('./dist/'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  resolve: {
    alias: {
      // Could have some static config values aliased here...
      //'settings': process.env.APP_SETTINGS || 'settings/local.js'
    },
    modulesDirectories: [
      '.',
      './src/scripts',
      './node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.es6']
  },
  module: {

    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ },
      { test: /\.es6$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        inclide: path.resolve('./src/scripts')
      },
      { test: /\.less/,
        loader: ExtractTextPlugin.extract(
            'style', // backup loader when not building .css file
            'css!less?sourceMap' // loaders to preprocess CSS
        )
      },
      { test: /\.css$/, loaders: ExtractTextPlugin.extract(['style', 'css']) },
      { test: /\.html$/, loader: 'file' },
      { test: /\.png$/, loader: 'file' },
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?&name=fonts/[name].[ext]' }
    ]
  }
};

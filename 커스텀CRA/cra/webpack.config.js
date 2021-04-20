const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './js/init.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'init.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015'],
          plugins: ["transform-object-assign", "transform-runtime"]
        }
      }
    ],
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: "pre", // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: [
          {
            loader: "jshint-loader"
          }
        ],
      }
    ]
  },
  jshint: {
    // any jshint option http://www.jshint.com/docs/options/
    // i. e.
    camelcase: true,

    // jshint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,

    // jshint to not interrupt the compilation
    // if you want any file with jshint errors to fail
    // set failOnHint to true
    failOnHint: false,

    // custom reporter function
    reporter: function(errors) { }
  },
  stats: {
    colors: true
  },
  //devtool: 'source-map'
};
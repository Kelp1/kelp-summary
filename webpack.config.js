const path = require('path');
const webpack = require('webpack');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

const common = {
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

const client = {
  entry: `${SRC_DIR}/client.js`,
  output: {
    filename: 'app.js',
    path: DIST_DIR,

  },
}

const server = {
  entry: `${SRC_DIR}/server.js`,
  output: {
    filename: 'app-server.js',
    path: DIST_DIR,
    libraryTarget: 'commonjs-module'
  }
}

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server),
]


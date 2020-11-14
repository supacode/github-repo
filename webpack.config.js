/* eslint-disable */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'js'),
    publicPath: '/js',
    filename: 'bundle.js',
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
};

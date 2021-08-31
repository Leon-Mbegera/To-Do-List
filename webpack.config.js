const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9000,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
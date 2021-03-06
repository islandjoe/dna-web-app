const path    = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        },
      },
      { test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|woff|woff2|svg|png|gif|jpe?g|eot)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*','.js','.jsx']
  },
  output: {
    path: path.resolve( __dirname, 'dist/' ),
    publicPath: '/dist/',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devServer: {
    contentBase: path.join( __dirname, 'public/' ),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  devtool: '#sourcemap',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
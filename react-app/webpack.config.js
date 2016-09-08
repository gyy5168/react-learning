var path = require("path");
module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  // entry:{
  //   'index':'./index.js'
  // },
  
  // output: {
  //       path: path.resolve(__dirname, 'build'),
  //       filename: '[name].js'
  // },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
var path = require('path');
var webpack = require('webpack');
var config = {
  entry: {
		todoapp: './src/index.js'
	},

	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'public/dist')
	},

   devServer: {
      port: 8000,
      contentBase: path.join(__dirname, './public'),
      historyApiFallback: {
        index: 'index.html'
      }
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
          }
      ]
   },
   plugins: [
     new webpack.DefinePlugin({
       'API_HOST': JSON.stringify("http://localhost:3001")
     })
    ]
}

module.exports = config;

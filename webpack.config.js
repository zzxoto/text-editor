var path = require("path");

module.exports = {
	entry: {
		//app: path.resolve(__dirname, 'src', 'index.js'),
		"test.spec": path.resolve(__dirname, 'spec', 'index.spec.js'),
		app_v2: path.resolve(__dirname, 'src2', 'index.js')
	},
	output:{
		path: __dirname+'/dist',
		filename: '[name].js'
	},
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['es2015', 'stage-2', 'react']
	        }
	      }
	    }
	  ]
	}
};



var path = require("path");

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'public', 'index.js'),
		test:path.resolve(__dirname, 'tests', 'rootTest.js') 
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
	          presets: ['es2015', 'stage-2']
	        }
	      }
	    }
	  ]
	}
};



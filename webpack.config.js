module.exports = {
	entry: './src/index.js',

	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader?' +JSON.stringify({
					cacheDirectory: true,
					presets: ['es2015', 'react']
				})],
				exclude: /node_modules/,
			},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
		]
	}
};

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: [
						'@babel/preset-react',
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					],
					plugins: [
						[
							'@babel/plugin-transform-runtime',
							{
								regenerator: true
							}
						],
						'@babel/plugin-proposal-class-properties'
					]
				}
			}
		]
	}
};

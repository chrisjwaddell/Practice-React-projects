const path = require("path")

module.exports = {
	mode: "development",
	// entry: "./src/index.js",
	entry: path.join(__dirname, "src", "index.js"),
	output: { path: path.resolve(__dirname, "dist"), filename: "index.js" },
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.js/,
	// 			exclude: /(node_modules)/,
	// 			use: [
	// 				{
	// 					loader: "babel-loader",
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	devServer: {
		// contentBase: "./dist",
		static: "./dist",
	},
}

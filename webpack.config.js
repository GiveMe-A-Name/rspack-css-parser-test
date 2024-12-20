const path = require("node:path");
const webpack = require("webpack");

/** @type {webpack.Configuration} */
const config = {
	entry: './src/main.js',
	output: {
		filename: '[name].mjs',
		path: path.resolve(__dirname, "dist"),
	},

	mode: "development",
	devtool: false,
	experiments: {
		css: true
	},
	output: {
		assetModuleFilename: "[name].[hash][ext][query][fragment]"
	},
};

module.exports = config;

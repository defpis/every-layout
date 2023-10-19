const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const distPath = __dirname + "/dist";
const publicPath = __dirname + "/public";
const htmlPath = publicPath + "/index.html";

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: distPath,
    filename: "main.[contenthash].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 将CSS注入到页面中的<style>标签
          "css-loader", // 将CSS转换为CommonJS模块
          "sass-loader", // 将SCSS编译为CSS
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: htmlPath,
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicPath,
          to: "",
          filter: (resourcePath) => {
            return resourcePath !== htmlPath;
          },
        },
      ],
    }),
  ],
  stats: "minimal",
  devServer: {
    static: distPath,
    host: "0.0.0.0",
    port: "9000",
  },
};

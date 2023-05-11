const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = function (_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && "cheap-module-source-map",
    //use devtool instead of `mode: env` for easier debugging. Set mode's value in env (either development, production, or none)
    entry: "./client/src/index.jsx",
    output: {
      path: path.resolve(__dirname, "client/dist"), //change to server/public instead?
      filename: "assets/js/[name].[contenthash:8].js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? "production" : "development",
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./client/public/index.html",
        filename: "index.html",
        favicon: "./client/public/favicon.ico",
      }),
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
  };
};

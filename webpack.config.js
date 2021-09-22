const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components|src\/fonts)/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg|gif|otf)/,
        use: {
          loader: "file-loader",
          options: {
            name: function name(fileName) {
              fileName = fileName.replace(/.*(node_modules|src\/font)\//i, "");
              fileName = fileName.replace(/\.(.+)/, ".[contenthash:8].$1");
              return fileName;
            },
            publicPath: "../"
          }
        }
      }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};

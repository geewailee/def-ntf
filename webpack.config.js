const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ["./client/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
    publicPath: "/build",
    proxy: {
      "/": "http://localhost:3000/",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/transform-runtime"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

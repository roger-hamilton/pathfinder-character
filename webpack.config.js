module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./src/app.js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ],
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  },
  devServer: {
    contentBase: "./dist",
    noInfo: true, //  --no-info option
    hot: true
  }
}

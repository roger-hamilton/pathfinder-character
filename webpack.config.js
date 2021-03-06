module.exports = {
  entry: {
    app: ["./src/app.js"]
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
    path: "./dist"
  }
}

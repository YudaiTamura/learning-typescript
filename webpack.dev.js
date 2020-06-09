const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: ["./src/main.ts"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devtool: "inline-source-map",
  resolve: {
    // importするときに省略できる拡張子の設定
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

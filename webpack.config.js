const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  // mode: "production",
  
  // トランスパイルをおこなう対象ファイル
  entry: "./src/index.tsx",

  // トランスパイル後のファイルの名前、ディレクトリの指定
  output: {
    path: `${__dirname}/public/`,
    filename: "bundle.js",
  },
  
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: 'public/index.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  
  // 開発用Webサーバーの起点ディレクトリ
  devServer: {
      contentBase: "./public",
      hot: true,
      publicPath: "/",
      open: true,
      port: 3000,
  },

  target: ["web", "es5"],
};
const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js' // Your appʼs entry point
  ],
  // entry: './src/index.js',
  // mode: "development", // @TODO, should depend on available .env file!
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /(node_modules|bower_components)/,
        type: 'asset/resource',
      },
      // load fonts this way :)
      // then add the font-faces in (s)css files
      // and use the font-family in your (s)css
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: 'asset/resource',
      // },
      {
        test: /\.mdx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', '@mdx-js/loader']
      }
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devServer: {
    static: path.join(__dirname, 'dist/'),
    // contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    // publicPath: 'http://localhost:3000/dist/',
    hot: true,
    // hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
  // node: {
  //   fs: 'empty'
  // },
};

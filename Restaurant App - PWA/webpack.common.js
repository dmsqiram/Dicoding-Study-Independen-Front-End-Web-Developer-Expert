const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            "style-loader", 
            "css-loader", 
            "sass-loader", 
        ],
    },
      {
        test: /\.jpeg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
            outputPath: './assets/img',
            quality: 50,
            progressive: true,
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      favicon: path.resolve(__dirname, 'src/public/favicon.ico'),
    }),
  ],
};
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.tsx',
    output: {
      filename: './[name].js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        { test: /.tsx?$/,
        loader: 'ts-loader',
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
}
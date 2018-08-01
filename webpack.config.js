module.exports = {
  entry: './styles/main.scss',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'styles.css',
    publicPath: '/public/'
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }]
    }]
  }
};

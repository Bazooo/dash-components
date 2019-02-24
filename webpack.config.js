module.exports = {
  module: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
}

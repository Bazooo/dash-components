const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [{
      loader: require.resolve('awesome-typescript-loader'),
    }, {
      loader: require.resolve('react-docgen-typescript-loader')
    }]
  })
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./')
  ]
  config.resolve.plugins = [
    new TsconfigPathsPlugin({ configFile: './tsconfig.json' })
  ]
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}

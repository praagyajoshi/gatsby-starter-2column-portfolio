var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function ({ config, stage }) {
  config.merge({
    postcss(wp) {
      return [
        require('postcss-cssnext')({ browsers: ['last 2 versions', '> 2%', 'ie 9'] }),
      ]
    },
  })

  if (stage === 'build-css') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loader: extractTextWebpackPlugin.extract(['css?minimize', 'postcss', 'sass']),
    })
  }

  if (stage === 'develop') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'],
    })
  }

  return config
};
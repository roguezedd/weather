module.exports = function(config) {
  config.set({
    browsers: ['Firefox'],
    files: [
      { pattern: 'test_context.js', watched: false }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'test_context.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
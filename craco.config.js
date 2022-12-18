module.exports = {
  webpack: {
      configure: (webpackConfig) => {
          webpackConfig.externals = {
              'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? require('./config.prod.json') : require('./conf/config.dev.json'))
          };
          return webpackConfig;
      },
  }
};
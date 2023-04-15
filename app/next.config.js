module.exports = {
    webpack(config, options) {
      config.modules.rules.push({
        experimental: {
          forceSwcTransforms: true,
        },
      });
      config.module.rules.push({
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [options.defaultLoaders.babel,
          { loader: 'graphql-let/loader' }],
      });
  
      config.module.rules.push({
        test: /\.graphqls$/,
        exclude: /node_modules/,
        use: ['graphql-let/schema/loader'],
      });
  
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader',
      });
  
      return config;
    },
  };
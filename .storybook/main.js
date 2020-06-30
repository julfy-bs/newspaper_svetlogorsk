module.exports = {
  stories: ['../src/**/**/**/*.stories.js'],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(p|post|)css$/,
      use: ["vue-style-loader", "css-loader", "postcss-loader"],
    });

    config.module.rules.push({
      test: /\.pug$/,
      use: ["pug-plain-loader"],
    });
    return config;
  },

  module.exports = {
    module: {
      rules: [
        {
          test: /\.inline.svg$/,
          loader: 'svg-react-loader'
        }
      ]
    }
  },
};

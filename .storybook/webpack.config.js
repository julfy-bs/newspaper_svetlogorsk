module.exports = (_, _, defaultConfig) => {
  const rules = defaultConfig.module.rules;

  // modify storybook file-loader rule to avoid conflicts with your inline svg
  const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.inline.svg$/;

  rules.push({
    test: /\.inline.svg$/,
    ...
    }],
  });

  return defaultConfig;
};
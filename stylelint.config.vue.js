module.exports = {
  extends: ['./stylelint.config.js'],
  processors: ['@mapbox/stylelint-processor-arbitrary-tags'],
  rules: {
    // vueの場合はインデント2
    indentation: 2,
    // vueの場合はシングルクォート
    'string-quotes': 'single',
    // styleタグがないこともある
    'no-empty-source': null,
  },
};

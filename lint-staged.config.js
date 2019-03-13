module.exports = {
  subTaskConcurrency: 1,
  linters: {
    '*.js': ['eslint --fix', 'git add'],
    '*.css': ['stylelint --fix', 'git add'],
    '*.vue': ['prettier --write', 'stylelint --config stylelint.config.vue.js', 'eslint --fix', 'git add'],
  },
};

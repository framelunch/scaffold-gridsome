module.exports = {
  extends: ['stylelint-config-prettier', 'stylelint-config-framelunch'],
  ignoreFiles: ['.cache', 'dist', 'node_modules', 'src/.temp', 'src/static'],
  rules: {
    // @系の構文の前には基本空行をいれる
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'blockless-after-same-name-blockless'],
      },
    ],
    // 複雑すぎる指定はNG ただし属性っぽいものはだいたいOK
    'selector-max-specificity': ['0,2,0', { ignoreSelectors: ['/:.*/', '/-[^-].*/', '/ \\+ /'] }],
    // コメントの前には空行
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    // カンマの後ろにはスペース
    'function-comma-space-after': 'always-single-line',
  },
};

module.exports = {
  plugins: ['prettier', 'vue', 'gridsome'],
  extends: ['framelunch', 'plugin:vue/recommended', 'prettier', 'prettier/vue'],
  rules: {
    /*
     * 妥協
     */
    // webpackの設定を挿せればよさそうなんだが、静的ファイル化されてないので難しそう
    'import/no-unresolved': 'off',

    // 未使用変数 警告 ただし、先頭に_のついている変数、引数はOKとする
    'no-unused-vars': [
      'warn',
      {
        caughtErrors: 'all',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    // thisを参照しないクラスメソッドはstaticでなければいけない 無効化 オブジェクト指向ってそういうもんではないと思う
    'class-methods-use-this': 'off',
    eqeqeq: ['error', 'smart'],
    // js以外の拡張子を強制
    'import/extensions': ['error', 'ignorePackages', { '.js': 'never' }],

    /*
     * gridsome
     */
    // format fix for <page-query> and <static-query>
    'gridsome/format-query-block': 'error',

    /*
     * with prettier
     */
    'prettier/prettier': 'warn',
  },
};

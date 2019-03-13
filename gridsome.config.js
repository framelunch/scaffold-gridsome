/* eslint-disable global-require, import/no-extraneous-dependencies */

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-import'),
          require('postcss-custom-properties'),
          require('postcss-custom-media'),
          require('postcss-nested'),
          require('postcss-color-hex-alpha'),
          require('postcss-calc'),
          require('postcss-flexbugs-fixes'),
          require('postcss-url'),
          require('autoprefixer')({ grid: true }),
        ],
      },
    },
  },
};

/* eslint-disable global-require, import/no-extraneous-dependencies */

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const dotenv = require('dotenv');

dotenv.config();

const configs = {
  siteName: 'Gridsome',
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
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_posts/blog/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
  ],
};

if (process.env.SITE_URL) {
  configs.plugins.push({ use: '@gridsome/plugin-sitemap' });
  configs.siteUrl = process.env.SITE_URL;
}

if (process.env.GOOGLE_ANALYTICS) {
  configs.plugins.push({
    use: '@gridsome/plugin-google-analytics',
    options: { id: process.env.GOOGLE_ANALYTICS },
  });
}

module.exports = configs;

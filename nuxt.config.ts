import metatags from './lib/metaTags';
import * as path from 'path';
import * as fs from 'fs';
import NuxtConfiguration from '@nuxt/config';

const sharp = require('responsive-loader/sharp');

const postsList = fs
  .readdirSync('./blogPosts/posts')
  .map(file => path.basename(file, '.md'));

const config: NuxtConfiguration = {
  server: {
    port: 3002,
  },
  head: {
    title: 'Personal Site',
    titleTemplate: '%s | praburangki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...metatags,
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#00796b' },
  css: ['~/designs/main.scss'],
  plugins: [{ src: '~/plugins/lazysizes', ssr: false }],
  modules: ['nuxt-purgecss', 'nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: ['Raleway:300,400,700'],
    },
  },
  purgeCSS: {
    whitelistPatternsChildren: [/navWrapper$/, /portoCardColumn$/],
  },
  build: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('postcss-url'),
        require('tailwindcss')('./designs/tailwind.config.js'),
        require('autoprefixer')({
          cascade: false,
          grid: true,
        }),
        require('postcss-preset-env')({
          stage: 0,
        }),
        require('cssnano')({
          preset: 'default',
          discardComments: { removeAll: true },
          zindex: false,
        }),
      ],
    },
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

      config.module.rules.find(rule =>
        rule.use
          ? rule.use[0].loader === 'url-loader'
          : rule.loader === 'url-loader'
      ).exclude = /\.(jpe?g|png)$/;

      config.module.rules.push({
        test: /\.(jpe?g|png)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              min: 400,
              max: 2000,
              steps: 3,
              silent: false,
              placeholder: true,
              placeholderSize: 16,
              quality: 80,
              adapter: sharp,
            },
          },
        ],
      });

      /*eslint-env node*/
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'blogPosts'),
        options: {
          vue: {
            root: 'dynamicMarkdown',
          },
        },
      });
    },
  },
  generate: {
    fallback: '404.html',
    subFolders: false,
    routes: postsList.map(post => `/posts/${post}`),
  },
};

export default config;

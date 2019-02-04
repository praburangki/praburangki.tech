const path = require('path');
const pkg = require('./package');
const sharp = require('responsive-loader/sharp');

module.exports = {
  head: {
    title: 'praburangki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat'
      }
    ]
  },
  loading: { color: '#00796b' },
  css: ['~/assets/css/main.scss'],
  plugins: [{ src: '~/plugins/lazysizes', ssr: false }],
  modules: ['nuxt-purgecss'],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return false;
    }
  },
  purgeCSS: {
    whitelistPatternsChildren: [/navWrapper$/, /portoCardColumn$/]
  },
  build: {
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      config.module.rules.find(
        rule =>
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
              min: 300,
              max: 2048,
              steps: 4,
              silent: false,
              placeholder: true,
              placeholderSize: 16,
              quality: 80,
              adapter: sharp
            }
          }
        ]
      });

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'blogPosts'),
        options: {
          vue: {
            root: 'dynamicMarkdown'
          }
        }
      });
    }
  }
};

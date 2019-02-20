const path = require('path');
const fs = require('fs');
const sharp = require('responsive-loader/sharp');

const postsList = fs.readdirSync('./blogPosts/posts').map(file => {
  return path.basename(file, '.md');
});

export default {
  head: {
    title: 'praburangki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#00796b' },
  css: ['~/assets/css/main.scss'],
  plugins: [{ src: '~/plugins/lazysizes', ssr: false }],
  modules: ['nuxt-purgecss', 'nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: ['Montserrat']
    }
  },
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
              min: 400,
              max: 2000,
              steps: 3,
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
  },
  generate: {
    fallback: '404.html',
    subFolders: false,
    routes: postsList.map(post => `/posts/${post}`)
  }
};

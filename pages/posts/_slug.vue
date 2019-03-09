<script>
import DynamicMarkdown from '~/components/blogs/DynamicMarkdown';
import ToggleTheme from '~/components/blogs/ToggleTheme';
import PostImg from '~/components/blogs/PostImg';

import { generateMeta } from '~/lib/metaTags';
let mediumZoom = null;
if (process.client) {
  mediumZoom = require('medium-zoom').default;
}

export default {
  asyncData({ store, params }) {
    const post = store.getters.getPost(params.slug);
    const { slug } = post;
    const coverImg = require(`~/blogPosts/images/${slug}/cover.jpg`);
    const coverImgSrc = coverImg.images.reverse()[0].path; // retrieve the highest resolution
    const baseUrl = 'https://praburangki.tech';

    const imgPathSrc = baseUrl + coverImgSrc;
    const articleUrl = `${baseUrl}/posts/${slug}`;

    return {
      post,
      imgPathSrc,
      articleUrl,
    };
  },
  head() {
    const { title, description, publishedTime } = this.post;
    const publishedAt = new Date(publishedTime);

    return {
      title,
      meta: [
        generateMeta('title', title),
        generateMeta('description', description),
        generateMeta('og:title', title, 'property'),
        generateMeta('og:url', this.articleUrl, 'property'),
        generateMeta('og:description', description, 'property'),
        generateMeta('og:image', this.imgPathSrc, 'property'),
        generateMeta('og:type', 'article', 'property'),
        generateMeta('og:site_name', 'praburangki.tech', 'property'),
        generateMeta('twitter:title', title),
        generateMeta('twitter:description', description),
        generateMeta('twitter:image', this.imgPathSrc),
        generateMeta('twitter:creator', '@praburangki'),
        generateMeta('twitter:site', '@praburangki'),
        generateMeta('author', 'Prabu Rangki', 'property'),
        generateMeta('article:publisher', this.baseUrl, 'property'),
        generateMeta('article:author', this.baseUrl, 'property'),
        generateMeta('article:published_time', publishedAt, 'property'),
      ],
    };
  },
  components: {
    DynamicMarkdown,
    ToggleTheme,
    PostImg,
  },
  data: () => ({
    theme: null,
  }),
  created() {
    this.theme = 'dark';
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.querySelector('body').classList.add('light');
      this.theme = 'light';
    }

    mediumZoom('.postImg-image', {
      background: '#DFE0E0',
    });
  },
  beforeDestroy() {
    document.querySelector('body').classList.remove('light');
  },
  methods: {
    toggleTheme(e) {
      const isChecked = e.target.checked;
      const bodyClass = document.querySelector('body').classList;
      this.theme = isChecked ? 'dark' : 'light';
      if (isChecked) {
        bodyClass.remove('light');
        localStorage.removeItem('theme');
      } else {
        bodyClass.add('light');
        localStorage.setItem('theme', 'light');
      }
    },
  },
};
</script>

<template lang="pug">
  section.blog
    ToggleTheme(@toggleTheme="toggleTheme", :checked="theme === 'dark'")
    .section-content
      article
        .relative.px-5.w-full.section-layout
          header: h1 {{ post.title }}
          .mt-5 {{ post.publishedAt}}
        .relative.w-full
          PostImg(cover)
        .relative.px-5.w-full.section-layout
          main
            DynamicMarkdown(
              :renderFunc="post.renderFunc",
              :staticRenderFuncs="post.staticRenderFuncs"
            )
          social-sharing(
            :url="this.articleUrl",
            :title="`${this.post.title} by @praburangki`",
            :quote="this.post.title",
            inline-template
          )
            footer.share
              network(network="twitter")
                a.shareBtn(title="Bagikan di Twitter")
                  <svg class="svgIcon-use" width="29" height="29"><path d="M22.053 7.54a4.474 4.474 0 0 0-3.31-1.455 4.526 4.526 0 0 0-4.526 4.524c0 .35.04.7.082 1.05a12.9 12.9 0 0 1-9.3-4.77c-.39.69-.61 1.46-.65 2.26.03 1.6.83 2.99 2.02 3.79-.72-.02-1.41-.22-2.02-.57-.01.02-.01.04 0 .08-.01 2.17 1.55 4 3.63 4.44-.39.08-.79.13-1.21.16-.28-.03-.57-.05-.81-.08.54 1.77 2.21 3.08 4.2 3.15a9.564 9.564 0 0 1-5.66 1.94c-.34-.03-.7-.06-1.05-.08 2 1.27 4.38 2.02 6.94 2.02 8.31 0 12.86-6.9 12.84-12.85.02-.24.01-.43 0-.65.89-.62 1.65-1.42 2.26-2.34-.82.38-1.69.62-2.59.72a4.37 4.37 0 0 0 1.94-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>
              network(network="facebook")
                a.shareBtn(title="Bagikan di Facebook")
                  <svg class="svgIcon-use" width="29" height="29"><path d="M23.209 5H5.792A.792.792 0 0 0 5 5.791V23.21c0 .437.354.791.792.791h9.303v-7.125H12.72v-2.968h2.375v-2.375c0-2.455 1.553-3.662 3.741-3.662 1.049 0 1.95.078 2.213.112v2.565h-1.517c-1.192 0-1.469.567-1.469 1.397v1.963h2.969l-.594 2.968h-2.375L18.11 24h5.099a.791.791 0 0 0 .791-.791V5.79a.791.791 0 0 0-.791-.79"></path></svg>
</template>

<style lang="scss" scoped>
section.blog {
  margin-bottom: 50px;

  .section-content {
    word-break: break-word;
    word-wrap: break-word;
  }

  .section-layout {
    max-width: 740px;
    margin: 0 auto;
  }

  article {
    header h1 {
      padding-top: 16px !important;
      font-size: 42px;
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: 0.85px;

      @media (max-width: 767px) {
        padding-top: 5px;
        font-size: 34px;
      }
    }
  }
}
</style>

<style lang="scss">
body {
  .section-content a {
    color: inherit;
    background-repeat: repeat-x;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.84) 100%,
      rgba(255, 255, 255, 0) 0
    );
    background-size: 1px 1px;
    background-position: 0 1.06em;
  }

  footer.share {
    display: flex;
    margin-top: 20px;

    .shareBtn {
      margin-right: 10px;
      text-decoration: none;
      background: none;

      svg {
        fill: rgba(255, 255, 255, 0.54);

        &:hover {
          fill: rgba(255, 255, 255, 0.84);
        }
      }
    }
  }

  &.light {
    .section-content a {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.84) 100%,
        rgba(0, 0, 0, 0) 0
      );
    }

    footer.share .shareBtn {
      background: none;
      svg {
        fill: rgba(0, 0, 0, 0.54);

        &:hover {
          fill: rgba(0, 0, 0, 0.84);
        }
      }
    }
  }
}
</style>

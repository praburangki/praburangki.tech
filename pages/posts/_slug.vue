<script>
let mediumZoom = null;
if (process.client) {
  mediumZoom = require('medium-zoom').default;
}

import DynamicMarkdown from '~/components/blogs/DynamicMarkdown';
import ToggleTheme from '~/components/blogs/ToggleTheme';
import PostImg from '~/components/blogs/PostImg';

import { generateMeta } from '~/lib/metaTags';

export default {
  asyncData({ store, params }) {
    return {
      post: store.getters.getPost(params.slug)
    };
  },
  head() {
    const { slug, title, description, publishedTime } = this.post;
    const coverImg = require(`~/blogPosts/images/${slug}/cover.jpg`);
    const coverImgSrc = coverImg.images.reverse()[0].path; // retrieve the highest resolution
    const baseUrl = 'https://praburangki.tech';
    const imgPathSrc = baseUrl + coverImgSrc;
    const articleUrl = `${baseUrl}/posts/${slug}`;
    const publishedAt = new Date(publishedTime);

    return {
      title,
      meta: [
        generateMeta('title', title),
        generateMeta('description', description),
        generateMeta('og:title', title, 'property'),
        generateMeta('og:url', articleUrl, 'property'),
        generateMeta('og:description', description, 'property'),
        generateMeta('og:image', imgPathSrc, 'property'),
        generateMeta('og:type', 'article', 'property'),
        generateMeta('og:site_name', 'praburangki.tech', 'property'),
        generateMeta('twitter:title', title),
        generateMeta('twitter:description', description),
        generateMeta('twitter:image', imgPathSrc),
        generateMeta('twitter:creator', '@praburangki'),
        generateMeta('twitter:site', '@praburangki'),
        generateMeta('author', 'Prabu Rangki', 'property'),
        generateMeta('article:publisher', baseUrl, 'property'),
        generateMeta('article:author', baseUrl, 'property'),
        generateMeta('article:published_time', publishedAt, 'property')
      ]
    };
  },
  components: {
    DynamicMarkdown,
    ToggleTheme,
    PostImg
  },
  data: () => ({
    theme: null
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
      background: '#DFE0E0'
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
    }
  }
};
</script>

<template lang="pug">
  section
    ToggleTheme(@toggleTheme="toggleTheme", :checked="theme === 'dark'")
    .section-content
      article
        .section-inner.section-layout
          header: h1 {{ post.title }}
          .published-at {{ post.publishedAt}}
        .section-inner.section-fullWidth
          PostImg(cover)
        .section-inner.section-layout
          main
            DynamicMarkdown(
              :renderFunc="post.renderFunc",
              :staticRenderFuncs="post.staticRenderFuncs"
            )
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 50px;

  .section-content {
    word-break: break-word;
    word-wrap: break-word;
  }

  .section-inner {
    position: relative;
  }

  .section-layout {
    max-width: 740px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    margin: 0 auto;
  }

  .section-fullWidth {
    width: 100%;
  }

  .published-at {
    margin-top: 20px;
  }

  article {
    header h1 {
      font-weight: 700;
      font-size: 42px;
      line-height: 1.25;
      letter-spacing: 0.85px;
      padding-top: 16px !important;

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

  &.light {
    .section-content a {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.84) 100%,
        rgba(0, 0, 0, 0) 0
      );
    }
  }
}
</style>

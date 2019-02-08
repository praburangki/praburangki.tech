<script>
import DynamicMarkdown from '~/components/blogs/DynamicMarkdown';
import ToggleTheme from '~/components/blogs/ToggleTheme';

export default {
  components: {
    DynamicMarkdown,
    ToggleTheme
  },
  data: () => ({
    theme: null
  }),
  computed: {
    post() {
      return this.$store.getters.getPost(this.$route.params.slug);
    },
    postImg() {
      return require(`~/blogPosts/images/${this.post.slug}.jpg`);
    }
  },
  created() {
    this.theme = 'dark';
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.querySelector('body').classList.add('light');
      this.theme = 'light';
    }
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
          header: h1.has-text-centered {{ post.title }}
        .section-inner.section-fullWidth
          figure
            .image-holder
              .placeholder
              img(
                :data-srcset="postImg.srcSet",
                :src="postImg.placeholder",
                class="lazyload"
              )
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

  figure {
    margin-top: 44px;
    margin-bottom: 80px;
    .image-holder {
      position: relative;
      .placeholder {
        padding-bottom: 56.3%;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
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
        line-height: 1.04;
        letter-spacing: 0;
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

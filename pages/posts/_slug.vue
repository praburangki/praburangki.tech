<template lang="pug">
  section(style="margin-bottom: 50px")
    ToggleTheme(@toggleTheme="toggleTheme", :checked="theme === 'dark'")
    .container
      h1.is-size-2.has-text-centered {{ post.title }}
      DynamicMarkdown(
        :renderFunc="post.renderFunc",
        :staticRenderFuncs="post.staticRenderFuncs"
      )
</template>

<script>
import DynamicMarkdown from '~/components/blogs/DynamicMarkdown';
import ToggleTheme from '~/components/blogs/ToggleTheme';

export default {
  components: {
    DynamicMarkdown,
    ToggleTheme
  },
  data: () => ({
    theme: null,
    coba: 'hehh'
  }),
  computed: {
    post() {
      return this.$store.getters.getPost(this.$route.params.slug);
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

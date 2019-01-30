<template lang="pug">
  .blogs
    PageTitle: h1 BLOG
    section.section
      .container
        h2.is-size-4 Latest
</template>

<script>
import PageTitle from '~/components/PageTitle';

export default {
  components: {
    PageTitle
  },
  created() {
    // this.toggleTheme('add');
  },
  beforeDestroy() {
    this.toggleTheme('remove');
  },
  methods: {
    toggleTheme(addRemove) {
      const bodyClass = document.body.classList;
      if (addRemove === 'add') {
        bodyClass.add('lightTheme');
      } else {
        bodyClass.remove('lightTheme');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/blogs.scss';
</style>

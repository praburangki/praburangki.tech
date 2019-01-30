<template lang="pug">
  .blogs
    PageTitle: h1 BLOG
    section.section
      .container
        h2.is-size-3.blogHeader Latest
        .columns.is-multiline.is-variable.is-9
          BlogCard
          BlogCard
          BlogCard
          BlogCard
          BlogCard
</template>

<script>
import PageTitle from '~/components/PageTitle';
import BlogCard from '~/components/blogs/BlogCard';

export default {
  components: {
    PageTitle,
    BlogCard
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

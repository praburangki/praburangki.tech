<template lang="pug">
  section.tab
    .columns.is-multiline.is-variable.is-8.blogListContainer
      template(v-for="post in allPosts")
        BlogCard(:title="post.title" :slug="post.slug")
</template>

<script>
import BlogCard from '~/components/blogs/BlogCard';

export default {
  asyncData({ store }) {
    return {
      allPosts: store.state.postAttributes
    };
  },
  components: {
    BlogCard
  }
};
</script>

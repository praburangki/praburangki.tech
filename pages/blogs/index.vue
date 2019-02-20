<template lang="pug">
  section.tab
    .columns.is-multiline.is-variable.is-8.blogListContainer
      template(v-for="post in latestPosts")
        BlogCard(
          :title="post.title",
          :slug="post.slug",
          :publishedAt="post.publishedAt"
        )
</template>

<script>
import BlogCard from '~/components/blogs/BlogCard';

export default {
  asyncData({ store }) {
    return {
      latestPosts: store.getters.latestPosts
    };
  },
  components: {
    BlogCard
  }
};
</script>

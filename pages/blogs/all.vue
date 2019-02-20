<template lang="pug">
  section.tab
    .columns.is-multiline.is-variable.is-8.blogListContainer
      template(v-for="post in allPosts")
        BlogCard(:title="post.title" :slug="post.slug")
</template>

<script>
import BlogCard from '~/components/blogs/BlogCard';
import { generateMeta } from '~/lib/metaTags';

export default {
  asyncData({ store }) {
    return {
      allPosts: store.state.postAttributes
    };
  },
  head() {
    return {
      title: 'All Blog Posts',
      meta: [generateMeta('title', 'All Blog Posts')]
    };
  },
  components: {
    BlogCard
  }
};
</script>

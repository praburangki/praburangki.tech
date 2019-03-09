<template lang="pug">
  section.tab
    .flex.flex-wrap.blogListContainer
      template(v-for="post in latestPosts")
        BlogCard(
          :title="post.title",
          :slug="post.slug",
          :publishedAt="post.publishedAt"
        )
</template>

<script>
import BlogCard from '~/components/blogs/BlogCard';

import { generateMeta } from '~/lib/metaTags';

export default {
  asyncData({ store }) {
    return {
      latestPosts: store.getters.latestPosts,
    };
  },
  head() {
    return {
      title: 'Latest Blog Posts',
      meta: [generateMeta('title', 'Latest Blog Posts')],
    };
  },
  components: {
    BlogCard,
  },
};
</script>

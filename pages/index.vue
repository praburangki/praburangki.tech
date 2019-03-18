<template lang="pug">
  #blogs
    PageTitle BLOG
    section.container
      .flex.flex-wrap
        template(v-for="post in allPosts")
          BlogCard(:title="post.title" :slug="post.slug" :publishedAt="post.publishedAt")
</template>

<script>
import BlogCard from '~/components/blogs/BlogCard';
import PageTitle from '~/components/PageTitle';
import { generateMeta } from '~/lib/metaTags';

export default {
  components: {
    PageTitle,
    BlogCard,
  },
  asyncData({ store }) {
    return {
      allPosts: store.state.postAttributes,
    };
  },
  head() {
    return {
      title: 'Blog',
      meta: [generateMeta('title', 'Blog')],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 60px;
}
</style>

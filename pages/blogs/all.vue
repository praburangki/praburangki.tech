<template lang="pug">
  section.tab
    .columns.is-multiline.is-variable.is-8.blogListContainer
      template(v-for="post in postAttributes")
        BlogCard(:title="post.title" :slug="post.slug")
</template>

<script>
import BlogCard from '~/components/blogs/BlogCard';

import { mapState } from 'vuex';

export default {
  components: {
    BlogCard
  },
  computed: {
    ...mapState(['postAttributes'])
  }
};
</script>

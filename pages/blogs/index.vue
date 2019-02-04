<template lang="pug">
  section.tab
    .columns.is-multiline.is-variable.is-9.blogListContainer
      BlogCard
      BlogCard
      BlogCard
</template>

<script>
import BlogCard from '~/components/blogs/BlogCard';
export default {
  components: {
    BlogCard
  }
};
</script>

<template lang="pug">
  section.tab
    .columns.is-multiline.is-variable.is-8.blogListContainer
      template(v-for="article in articles")
        BlogCard(:title="article.title" :slug="article.slug")
</template>

<script>
import BlogCard from '~/components/blogs/BlogCard';
import articleList from '~/blogPosts/articles.md';

export default {
  components: {
    BlogCard
  },
  computed: {
    articles() {
      return articleList.attributes;
    }
  }
};
</script>

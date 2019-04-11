<template lang="pug">
  #blogs
    PageTitle BLOG
    section.container
      .flex.flex-wrap
        template(v-for="post in allPosts")
          BlogCard(:title="post.title" :slug="post.slug" :publishedAt="post.publishedAt")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BlogCard from '~/components/blogs/BlogCard.vue';
import PageTitle from '~/components/PageTitle.vue';
import { generateMeta } from '~/lib/metaTags';

@Component({
  components: {
    PageTitle,
    BlogCard,
  },
})
export default class HomePage extends Vue {
  asyncData({ store }) {
    return {
      allPosts: store.state.postAttributes,
    };
  }
  head() {
    return {
      title: 'Blog',
      meta: [generateMeta('title', 'Blog')],
    };
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-top: 60px;
}
</style>

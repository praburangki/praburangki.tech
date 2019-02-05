<template lang="pug">
  .container
    h1.is-size-2.has-text-centered {{ post.title }}
    DynamicMarkdown(
      :renderFunc="post.renderFunc",
      :staticRenderFuncs="post.staticRenderFuncs"
    )
</template>

<script>
import DynamicMarkdown from '~/components/blogs/DynamicMarkdown';

export default {
  components: {
    DynamicMarkdown
  },
  computed: {
    post() {
      return this.$store.getters.getPost(this.$route.params.slug);
    }
  }
};
</script>

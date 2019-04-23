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
export default class ProjectsPage extends Vue {
  head() {
    return {
      title: 'Projects',
      meta: [generateMeta('title', 'Projects')],
    };
  }
}
</script>

<template lang="pug">
  div
    PageTitle PROJECTS
    section.section
      .container.mb-16
        p.heading Here is a list of fun projects that I would love to share.
        .mt-16.flex.flex-wrap
          BlogCard(title="Javascript 30" slug="javascript30")
</template>

<style lang="postcss" scoped>
.heading {
  @apply max-w-md text-center mx-auto;
}
</style>

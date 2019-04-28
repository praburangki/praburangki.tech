<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'fun-projects',
})
export default class CalculatorPage extends Vue {
  head() {
    return {
      title: 'Calculator',
    };
  }

  created() {
    this.$store.commit('projects/setTitle', 'Calculator');
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

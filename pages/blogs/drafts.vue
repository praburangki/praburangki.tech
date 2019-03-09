<template lang="pug">
  section.tab
    .text-center
      h2.mb-4.text-3xl Ideas & Drafts
      .flex.justify-center
        .w-2--5
          p This is a list of ideas or drafts that I would love to write in future posts. You can track the progress, vote or suggest something that I should write by creating an issue.
          a.button.bg-primary.text-white.mt-5(
            href="https://github.com/praburangki/praburangki.tech/issues",
            target="_blank",
            rel="noopener noreferrer"
          )
            span.icon.flex.mr-2
              Github
            span GitHub
</template>

<script>
import Github from '~/components/Icons/Socials/Github';
import { generateMeta } from '~/lib/metaTags';

export default {
  head() {
    return {
      title: 'Draft Blog Posts',
      meta: [generateMeta('title', 'Draft Blog Posts')],
    };
  },
  components: {
    Github,
  },
};
</script>

<style lang="scss" scoped>
a.button {
  span.icon {
    svg {
      width: 1.3em;
    }
  }
}
</style>

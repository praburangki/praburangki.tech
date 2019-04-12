<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import SkillsIcons from '~/components/SkillsIcons.vue';
import PageTitle from '~/components/PageTitle.vue';
import GdgIcon from '~/components/Icons/GdgIcon.vue';

import { generateMeta } from '~/lib/metaTags';

@Component({
  components: {
    SkillsIcons,
    PageTitle,
    GdgIcon,
  },
})
export default class SkillsPage extends Vue {
  head() {
    return {
      title: 'Skills',
      meta: [generateMeta('title', 'Skills')],
    };
  }
}
</script>

<template lang="pug">
  div
    PageTitle SKILLS
    section.section
      .container
        p.headingMb
          |My passion lies in two major areas, <strong>software development</strong> and <strong>community building</strong>.
          |Building things that can benefit a lot of people and to help other developers to grow is how I enjoy my life.
        hr
        .subtitle Development
        .caption Here is a list of technologies that I'm experienced in:
        SkillsIcons
        hr
        .subtitleMt Community
        p.heading
          |I love to share and contribute to the local communities.
          |I've been giving talks and workshops in various meetups and conferences.
          |Currently I'm the manager of <strong>GDG Bali</strong>.
        .gdgIcon
          a(href="https://gdgbali.com", target="_blank", rel="noopener noreferrer")
            GdgIcon

</template>

<style lang="postcss" scoped>
.heading {
  @apply max-w-md text-center mx-auto;
}
.headingMb {
  @apply heading mb-8;
}
.subtitle {
  @apply text-base2x text-center mb-4;
}
.subtitleMt {
  @apply subtitle mt-10;
}
.caption {
  @apply text-xl text-center mb-8;
}
.gdgIcon {
  @apply max-w-xs mx-auto my-12;
}
</style>

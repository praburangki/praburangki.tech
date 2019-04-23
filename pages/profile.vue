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
export default class ProfilePage extends Vue {
  head() {
    return {
      title: 'Profile',
      meta: [generateMeta('title', 'Profile')],
    };
  }
}
</script>

<template lang="pug">
  div
    PageTitle PROFILE
    section.section
      .container
        .flex.flex-col.items-center
          div
            img.avatar.rounded-half.h-auto.mb-5(src="~assets/images/pic.jpg", alt="my avatar")
          .text-center
            h1.text-3xl.tracking-wide Hi
            h1.text-4xl.tracking-wide I'm Prabu
            h1.text-3xl.tracking-wide A Software Engineer
    hr
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

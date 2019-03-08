<template lang="pug">
  div
    PageTitle SKILLS
    section.section
      .container
        p.max-w-md.text-center.mb-8.mx-auto
          |My passion lies in two major areas, <strong>software development</strong> and <strong>community building</strong>.
          |Building things that can benefit a lot of people and to help other developers to grow is how I enjoy my life.
        hr
        .text-base2x.text-center.mb-4 Development
        .text-xl.text-center Here is a list of technologies that I'm experienced in:
        SkillsIcons
        hr
        .text-base2x.text-center.mb-4.mt-10 Community
        p.max-w-md.text-center.mb-8.mx-auto
          |I love to share and contribute to the local communities.
          |I've been giving talks and workshops in various meetups and conferences.
          |Currently I'm the manager of <strong>GDG Bali</strong>.
        .gdgIcon
          a(href="https://gdgbali.com", target="_blank", rel="noopener noreferrer")
            GdgIcon

</template>

<script>
import SkillsIcons from '~/components/SkillsIcons';
import PageTitle from '~/components/PageTitle';
import GdgIcon from '~/components/Icons/GdgIcon';

import { generateMeta } from '~/lib/metaTags';

export default {
  head() {
    return {
      title: 'Skills',
      meta: [generateMeta('title', 'Skills')],
    };
  },
  components: {
    SkillsIcons,
    PageTitle,
    GdgIcon,
  },
};
</script>

<style scoped>
.gdgIcon {
  max-width: 300px;
  margin: 50px auto;
}
</style>

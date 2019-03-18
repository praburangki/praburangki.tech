<template lang="pug">
  .flex.flex-col.min-h-screen
    Navbar(:navIsVisible="navIsVisible" @toggleNavbar="toggleNavbar")
    main(:class="this.navVisibleClass")
      nuxt
    footer#mainFooter.text-center(:class="{ navIsVisible: navIsVisible }")
      .socials.flex.justify-between.mt-5
          div(v-for="social in socials", :key="social.id")
            a(
              target="_blank",
              :href="social.link",
              rel="noopener noreferrer",
              :aria-label="social.ariaText"
            )
              Component(:is="social.icon")
      div
        |Made with
        a(href="https://nuxtjs.org/" target="_blank" rel="noreferrer noopener")  Nuxt
        |  and
        a(href="https://tailwindcss.com" target="_blank" rel="noreferrer noopener")  Tailwind
</template>

<script>
import Navbar from '~/components/Navbar/Navbar';
import commonMixin from '~/mixins/commonMixin';
import profileImg from '~/assets/images/pic.jpg';
import socials from '~/data/socials';

import { generateMeta } from '~/lib/metaTags';

const metaImgPath = `https://praburangki.tech${profileImg}`;

export default {
  components: {
    Navbar,
  },
  mixins: [commonMixin],
  data: () => ({
    navIsVisible: false,
    socials,
  }),
  methods: {
    toggleNavbar() {
      this.navIsVisible = !this.navIsVisible;
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id',
      },
      meta: [
        generateMeta('og:image', metaImgPath, 'property'),
        generateMeta('twitter:image', metaImgPath),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.socials {
  width: 200px;
  margin: 0 auto;
  margin-bottom: 30px;

  div {
    width: 30px;
  }
}
</style>

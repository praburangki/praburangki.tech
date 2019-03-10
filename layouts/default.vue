<template lang="pug">
  .flex.flex-col.min-h-screen
    Navbar(:navIsVisible="navIsVisible" @toggleNavbar="toggleNavbar")
    main(:class="this.navVisibleClass")
      nuxt
    footer#mainFooter.text-center(:class="{ navIsVisible: navIsVisible }")
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

import { generateMeta } from '~/lib/metaTags';

const metaImgPath = `https://praburangki.tech${profileImg}`;

export default {
  components: {
    Navbar,
  },
  mixins: [commonMixin],
  data: () => ({
    navIsVisible: false,
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

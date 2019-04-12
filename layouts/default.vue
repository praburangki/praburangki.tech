<template lang="pug">
  .flex.flex-col.min-h-screen
    Navbar(:navIsVisible="navIsVisible" @toggleNavbar="toggleNavbar")
    main(:class="this.navVisibleClass")
      nuxt
    footer#mainFooter.text-center(:class="{ navIsVisible: navIsVisible }")
      .socials.flex.justify-center.mb-2
          .w-6.mx-4(v-for="social in socials", :key="social.id")
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

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import Navbar from '~/components/Navbar/Navbar.vue';
import profileImg from '~/assets/images/pic.jpg';
import socials from '~/data/socials';
import { generateMeta } from '~/lib/metaTags';
import CommonMixin from '~/mixins/commonMixin';

const metaImgPath = `https://praburangki.tech${profileImg}`;

@Component({
  components: {
    Navbar,
  },
})
export default class DefaultLayout extends mixins(CommonMixin) {
  navIsVisible = false;
  socials = socials;

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
  }

  toggleNavbar() {
    this.navIsVisible = !this.navIsVisible;
  }
}
</script>

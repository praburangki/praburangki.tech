<template lang="pug">
  div.main
    Navbar(:navIsVisible="navIsVisible" @toggleNavbar="toggleNavbar")
    main(:class="this.navVisibleClass")
      nuxt
    footer.has-text-centered(:class="{ navIsVisible: navIsVisible }")
      div
        |Made with
        a(href="https://nuxtjs.org/" target="_blank" rel="noreferrer noopener")  Nuxt
        |  and
        a(href="https://bulma.io" target="_blank" rel="noreferrer noopener")  Bulma
</template>

<script>
import Navbar from '~/components/Navbar';
import commonMixin from '~/mixins/commonMixin';
import profileImg from '~/assets/images/pic.jpg';

export default {
  components: {
    Navbar
  },
  mixins: [commonMixin],
  data: () => ({
    navIsVisible: false
  }),
  methods: {
    toggleNavbar() {
      this.navIsVisible = !this.navIsVisible;
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { hid: 'og:image', property: 'og:image', content: profileImg.src },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: profileImg.src
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
footer {
  padding-bottom: 30px;

  a {
    color: #ffef00;
  }

  &.navIsVisible {
    margin-top: 170px;
  }
}
main {
  flex: 1 1 0;
  transition: transform 0.5s;
  transform: translateZ(0);
  backface-visibility: hidden;

  &.navIsVisible {
    transform: translateY(80px);

    @media only screen and (min-width: 768px) {
      transform: translateY(170px);
    }
  }
}
</style>

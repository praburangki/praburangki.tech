<template lang="pug">
  div.main
    Navbar(:navIsVisible="navIsVisible" @toggleNavbar="toggleNavbar")
    main(:class="this.navVisibleClass")
      nuxt
    footer.has-text-centered
      div
        |Made with
        a(href="https://nuxtjs.org/" target="_blank" rel="noreferrer noopener")  Nuxt
        |  and
        a(href="https://bulma.io" target="_blank" rel="noreferrer noopener")  Bulma
</template>

<script>
import Navbar from '~/components/Navbar';
import commonMixin from '~/mixins/commonMixin';

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
      }
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
  margin-top: 120px;
  padding-bottom: 30px;

  a {
    color: #ffef00;
  }
}
main {
  flex: 1 0 auto;
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

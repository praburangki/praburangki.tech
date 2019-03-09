<script>
import commonMixin from '~/mixins/commonMixin';
import navLinks from '~/data/navLinks';

export default {
  mixins: [commonMixin],
  props: {
    navIsVisible: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    navLinks,
  }),
  computed: {
    navVisibleClass() {
      return { navIsVisible: this.navIsVisible };
    },
  },
  methods: {
    toggleNavbar() {
      this.$emit('toggleNavbar');
    },
  },
};
</script>

<template lang="pug">
  .navWrapper
    header.topNav(:class="navVisibleClass")
      a.toggleNav(@click="toggleNavbar")
        |Menu
        span
    nav.navContainer(:class="navVisibleClass")
      .navList.flex
        nuxt-link.flex-1.navItem(
          v-for="navLink in navLinks"
          :key="navLink.text"
          @click.native="toggleNavbar"
          :to="navLink.path"
        )
          |{{ navLink.text }}
          span.navMarker
</template>

<style lang="scss" scoped>
@import './styles.scss';
</style>

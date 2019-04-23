<script lang="ts">
import { Component, mixins, Prop } from 'nuxt-property-decorator';
import CommonMixin from '~/mixins/commonMixin';
import navLinks from '~/data/navLinks';

@Component({})
export default class Navbar extends mixins(CommonMixin) {
  @Prop({ default: false })
  navIsVisible: boolean;
  navLinks = navLinks;

  get navVisibleClass() {
    return { navIsVisible: this.navIsVisible };
  }

  toggleNavbar() {
    this.$emit('toggleNavbar');
  }
}
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

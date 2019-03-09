<template lang="pug">
  .blogs
    PageTitle BLOG
    section.section
      .container
        nav.text-center
          .tabWrapper.relative.rounded-full.inline-block
            .selector.rounded-full.absolute.inline-block.h-full(:style="tabPill")
            nuxt-link(to="/blogs" @click.native="changeRoute($event)") LATEST
            nuxt-link(to="/blogs/all" @click.native="changeRoute($event)" style="margin: 0 10px") ALL
            nuxt-link(to="/blogs/drafts" @click.native="changeRoute($event)") DRAFTS
        div
          nuxt-child
</template>

<script>
import PageTitle from '~/components/PageTitle';
import BlogCard from '~/components/blogs/BlogCard';

export default {
  components: {
    PageTitle,
    BlogCard,
  },
  data: () => ({
    tabPill: {
      left: '',
      width: '',
    },
  }),
  mounted() {
    const activeEl = this.$el.querySelector('.nuxt-link-exact-active');

    this.tabPill = {
      left: `${activeEl.offsetLeft}px`,
      width: `${activeEl.clientWidth}px`,
    };
  },
  methods: {
    changeRoute(evt) {
      this.tabPill = {
        left: `${evt.target.offsetLeft}px`,
        width: `${evt.target.clientWidth}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/designs/blogs.scss';

.tabWrapper {
  background-color: #353b3f;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);

  a {
    text-decoration: none;
    color: #777;
    text-transform: uppercase;
    padding: 10px 20px;
    display: inline-block;
    position: relative;
    z-index: 1;
    transition-duration: 0.6s;

    &.nuxt-link-exact-active {
      color: #fff;
    }
  }
}

.selector {
  top: 0px;
  z-index: 1;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  background-color: #632325;
  background-image: linear-gradient(315deg, #632325 0%, #a53b3e 74%);
}
</style>

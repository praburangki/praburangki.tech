<template lang="pug">
  section.section
    .container
      .sectionWrapper
        div
          img.avatar(src="~assets/images/pic.jpg", alt="my avatar")
        .has-text-centered
          h1.is-size-3 Hi
          h1.is-size-2 I'm Prabu
          h1.is-size-3 A Full-Stack Web Developer
        .socials
          div(v-for="social in socials", :key="social.id")
            a(
              target="_blank",
              :href="social.link",
              rel="noopener noreferrer",
              :aria-label="social.ariaText"
            )
              Component(:is="social.icon")
</template>

<script>
import socials from '~/data/socials';

export default {
  data: () => ({
    socials
  }),
  mounted() {
    console.log(this.socials);
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 220px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
}

.socials {
  width: 200px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  div {
    width: 30px;
  }
}
</style>

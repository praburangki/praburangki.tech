<template lang="pug">
  section.section
    .container
      .sectionWrapper
        div
          img.avatar(src="~assets/images/pic.jpg")
        .has-text-centered
          h1.is-size-3 Hi
          h1.is-size-2 I'm Prabu
          h1.is-size-3 A Full-Stack Web Developer
        .socials
          Github
          Twitter
          LinkedIn
          Gmail
</template>

<script>
import Twitter from '~/components/Twitter';
import Github from '~/components/Github';
import LinkedIn from '~/components/LinkedIn';
import Gmail from '~/components/Gmail';

export default {
  components: {
    Twitter,
    Github,
    LinkedIn,
    Gmail
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

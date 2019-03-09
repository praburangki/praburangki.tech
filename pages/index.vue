<template lang="pug">
  section.section
    .container
      .flex.flex-col.items-center
        div
          img.avatar.rounded-half.h-auto.mb-5(src="~assets/images/pic.jpg", alt="my avatar")
        .text-center
          h1.text-3xl.tracking-wide Hi
          h1.text-4xl.tracking-wide I'm Prabu
          h1.text-3xl.tracking-wide A Software Engineer
        .socials.flex.justify-between.mt-5
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
    socials,
  }),
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 220px;
}

.socials {
  width: 200px;

  div {
    width: 30px;
  }
}
</style>

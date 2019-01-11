<template lang="pug">
  section.section
    .container
      h1.is-size-2.has-text-centered.mainTitle SKILLS
      .columns.is-centered
        .column.is-narrow
          p.long-par.has-text-centered
            |My passion lies in two major areas, <strong>software development</strong> and <strong>community building</strong>.
            |Building things that can benefit a lot of people and to help other developers to grow is how I enjoy my life.
      hr
      .is-size-3.has-text-centered Development
      .is-size-5.has-text-centered Here is a list of technologies that I'm experienced in:
      SkillsIcons
      .is-size-3.has-text-centered Community
</template>

<script>
import SkillsIcons from '~/components/SkillsIcons';

export default {
  components: {
    SkillsIcons
  }
};
</script>

<style lang="scss" scoped>
.long-par {
  max-width: 630px;
}
.is-size-3 {
  margin-bottom: 15px;
}
</style>

<template lang="pug">
  section.tab
    .has-text-centered
      h2.is-size-3.blogHeader Ideas & Drafts
      .columns.is-centered: .column.is-5
        p This is a list of ideas or drafts that I would love to write in future posts. You can track the progress, vote or suggest something that I should write by creating an issue.
        a.button.is-primary(
          href="https://github.com/praburangki/praburangki.tech/issues",
          target="_blank",
          rel="noopener noreferrer"
        )
          span.icon.is-medium
            Github
          span GitHub
</template>

<script>
import Github from '~/components/Icons/Socials/Github';
export default {
  components: {
    Github
  }
};
</script>

<style lang="scss" scoped>
a.button {
  margin-top: 20px;

  span.icon {
    margin-right: 10px;

    svg {
      width: 1.3em;
    }
  }
}

ul.panelWrapper {
  display: flex;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
    0 0 0 0 rgba(0, 0, 0, 0.12);
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
}
</style>

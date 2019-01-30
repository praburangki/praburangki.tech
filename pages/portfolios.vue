<template lang="pug">
  div
    PageTitle PORTFOLIOS
    section.section
      .container
        .columns.is-centered
          .column.is-narrow
            p.long-par.has-text-centered
              |After 5+ years working as professional developer, here are some of the works that I've accomplished.
        .columns.is-multiline.portos
          Card(
            v-for="item in cards",
            :key="item.name",
            :item="item"
          )
</template>

<script>
import Card from '~/components/Card';
import PageTitle from '~/components/PageTitle';
import cards from '~/data/portfolios';

export default {
  components: {
    Card,
    PageTitle
  },
  data: () => ({
    cards
  })
};
</script>

<style lang="scss" scoped>
.portos {
  margin-top: 30px;
}
</style>

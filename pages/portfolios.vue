<template lang="pug">
  div
    .is-size-2.mainTitle
      .isFlex.redLine
      .isFlex.text.has-text-centered PORTFOLIOS
      .isFlex.redLine
    section.section
      .container
        .columns.is-centered
          .column.is-narrow
            p.long-par.has-text-centered
              |After 5+ years working as professional developer, here are some of the works that I've accomplished.
        .columns.is-multiline
          Card(
            v-for="item in cards",
            :key="item.name",
            :name="item.name",
            :short="item.short",
            :long="item.long",
            :techStack="item.techStack"
          )
</template>

<script>
import Card from '~/components/Card';

const generateCard = (name, short, long, techStack, link) => ({
  name,
  short,
  long,
  techStack,
  link
});

export default {
  components: {
    Card
  },
  data: () => ({
    cards: [
      generateCard(
        'Carriage',
        'Food Delivery Service',
        'Startup based in Kuwait that provides delivery services for multiple countries.',
        ['rails', 'jquery'],
        'https://trycarriage.com/'
      ),
      generateCard(
        'Arctic Imagination',
        'News and Catalogs',
        'An international library collaboration about the disappearing of ice.',
        ['node', 'jquery'],
        'http://www.arcticimagination.com/'
      )
    ]
  })
};
</script>

<style scoped>
</style>

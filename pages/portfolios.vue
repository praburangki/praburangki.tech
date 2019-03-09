<template lang="pug">
  div
    PageTitle PORTFOLIOS
    section.section
      .container
        .flex.flex-col
          p.max-w-md.text-center.mb-8.mx-auto
            |After 5+ years working as professional developer, here are some of the works that I've accomplished.
          .flex.flex-wrap.mt-8
            Card(
              v-for="item in cards",
              :key="item.name",
              :item="item"
            )
</template>

<script>
import Card from '~/components/portfolios/Card';
import PageTitle from '~/components/PageTitle';
import cards from '~/data/portfolios';

import { generateMeta } from '~/lib/metaTags';

export default {
  head() {
    return {
      title: 'Portfolios',
      meta: [generateMeta('title', 'Portfolios')],
    };
  },
  components: {
    Card,
    PageTitle,
  },
  data: () => ({
    cards,
  }),
};
</script>


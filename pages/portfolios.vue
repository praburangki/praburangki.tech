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
        .columns.is-multiline.portos
          Card(
            v-for="item in cards",
            :key="item.name",
            :item="item"
          )
</template>

<script>
import Card from '~/components/Card';

const generateCard = (
  name,
  short,
  long,
  techStack,
  imageSrc,
  link,
  className,
  fullWidth = true
) => ({
  name,
  short,
  long,
  techStack,
  imageSrc,
  link,
  className,
  fullWidth
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
        ['rails', 'js'],
        require('~/assets/images/carriage.jpg'),
        'https://trycarriage.com/',
        'carriage',
        false
      ),
      generateCard(
        "Pond's Men",
        'Trivia Quiz',
        "Trivia Quiz for the FIFA World Cup 2018 to win prizes from Pond's Men",
        ['node', 'react', 'firebase'],
        require('~/assets/images/ponds.jpg'),
        'https://triplelakimasakini.goal.com/',
        'ponds'
      ),
      generateCard(
        'Memotus',
        'Health Counseling',
        'Startup based in Sweden where people who have injuries can discuss and ask for help from the experts.',
        ['node', 'react'],
        require('~/assets/images/memotus.jpg'),
        'https://memotus.se/',
        'memotus'
      ),
      generateCard(
        'GDG Bali',
        'Community & Events',
        'Events for the Google Developer Group community in Bali.',
        ['rails', 'node', 'pwa', 'vue'],
        require('~/assets/images/gdg.jpg'),
        'https://gdgbali.com/',
        'gdg'
      ),
      generateCard(
        'Arctic Imagination',
        'News and Catalogs',
        'An international library collaboration about the disappearing of the ice.',
        ['node', 'js'],
        require('~/assets/images/arctic.jpg'),
        'http://www.arcticimagination.com/',
        'arctic'
      ),
      generateCard(
        'Nujeks',
        'Administration System',
        'Administration System for the Nusantara Jaya Ekspress logistics company.',
        ['rails', 'node', 'vue'],
        require('~/assets/images/nujeks.jpg'),
        'https://nujeks.com',
        'nujeks'
      ),
      generateCard(
        'Magloft',
        'Digital Publishing',
        'Digital publishing solution for indies, magazine publishers, bloggers and more!',
        ['rails', 'js'],
        require('~/assets/images/magloft.jpg'),
        'https://www.magloft.com/',
        'magloft'
      )
    ]
  })
};
</script>

<style lang="scss" scoped>
.portos {
  margin-top: 30px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { generateMeta } from '~/lib/metaTags';

const generateLinks = (link, text) => ({ link, text });

@Component({})
export default class Javascript30Page extends Vue {
  head() {
    return {
      title: 'Javascript 30',
      meta: [generateMeta('title', 'Javascript 30')],
    };
  }

  links = [
    generateLinks('drumkit', 'Drumkit'),
    generateLinks('clock', 'Clock'),
    generateLinks('css-variables', 'CSS Variables'),
    generateLinks('flex-gallery', 'Flex Gallery'),
  ];
}
</script>

<template lang="pug">
  section
    .container
      h1.text-center JAVASCRIPT 30
      .max-w-md.mx-auto
        p.text-center.my-5
          |This project is inspired from
          a(href="https://javascript30.com/")  Wes Bos's 30 Days JS Challenge
          |  but instead of using vanilla JS, here I'm using it with Vue.js. All credit goes to Wes Bos.
        ul
          li(v-for="item in links" :key="item.link")
            nuxt-link(:to="`/projects/javascript30/${item.link}`") {{ item.text }}
</template>

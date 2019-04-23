<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { generateMeta } from '~/lib/metaTags';

@Component({})
export default class Javascript30Page extends Vue {
  head() {
    return {
      title: 'Javascript 30',
      meta: [generateMeta('title', 'Javascript 30')],
    };
  }
}
</script>

<template lang="pug">
  section
    .container
      h1.text-center JAVASCRIPT 30
      p.max-w-md.text-center.mx-auto.mt-5
        |This project is inspired from
        a(href="https://javascript30.com/")  Wes Bos's 30 Days JS Challenge
        |  but instead of using vanilla JS, here I'm using it with Vue.js. All credit goes to Wes Bos.
      ul
        li
          nuxt-link(to="/projects/javascript30/drumkit") Drumkit
</template>

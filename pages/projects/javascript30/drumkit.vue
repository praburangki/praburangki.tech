<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  layout: 'javascript30',
})
export default class DrumkitPage extends Vue {
  head() {
    return {
      title: 'Drumkit - JS 30',
    };
  }

  created() {
    this.$store.commit('js30/setTitle', 'Drumkit');
  }
}
</script>

<template lang="pug">
  h1 Drumkit
</template>

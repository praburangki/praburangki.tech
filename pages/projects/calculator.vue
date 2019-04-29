<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'fun-projects',
})
export default class CalculatorPage extends Vue {
  head() {
    return {
      title: 'Calculator',
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
        },
      ],
    };
  }

  created() {
    this.$store.commit('projects/setTitle', 'Calculator');
  }

  mounted() {
    // document.addEventListener('keydown', this.handleKeyDown);
  }

  beforeDestroy() {
    // document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(key) {
    console.log('keyyy: ', key);
  }
}
</script>

<template lang="pug">
  v-layout(wrap)
    v-layout(column).numbers
      v-layout
        v-btn(flat fab) 7
        v-btn(flat fab) 8
        v-btn(flat fab) 9
      v-layout
        v-btn(flat fab) 4
        v-btn(flat fab) 5
        v-btn(flat fab) 6
      v-layout
        v-btn(flat fab) 1
        v-btn(flat fab) 2
        v-btn(flat fab) 3
      v-layout
        v-btn(flat fab) 0
        v-btn(flat fab) .
        v-btn(flat fab) =
    v-layout(column).operators
      v-btn(flat fab) C
      v-btn(flat fab) +
      v-btn(flat fab) -
      v-btn(flat fab) &times;
      v-btn(flat fab) &divide;
</template>

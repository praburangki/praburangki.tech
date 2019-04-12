<template lang="pug">
  .container
    .columns.is-centered.is-multiline.text-center
      .column.is-12
        h1.is-size-1(v-if="error.statusCode === 404") Page Not Found
      .column
        nuxt-link(to="/") Back to home page
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  props: ['error'],
})
export default class ErrorLayout extends Vue {
  error: any;
}
</script>

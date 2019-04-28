<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import 'prismjs';
import '~/designs/components/prism-one-dark.css';
import Prism from 'vue-prism-component';

@Component({
  components: {
    Prism,
  },
})
export default class CodeSnippet extends Vue {
  @Prop({})
  language: string;
  @Prop({})
  code: string;
}
</script>

<template lang="pug">
  Prism(:language="language" :code="code")
</template>

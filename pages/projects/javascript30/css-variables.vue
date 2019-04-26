<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  layout: 'javascript30',
})
export default class CSSVariablesPage extends Vue {
  head() {
    return {
      title: 'CSS Variables - JS 30',
    };
  }

  created() {
    this.$store.commit('js30/setTitle', 'CSS Variables');
  }

  base = '#ffc600';
  spacing = '10';
  blur = '10';
}
</script>

<template lang="pug">
  section.text-center.p-8
    .mb-12.flex.justify-center.items-center.flex-wrap
      label.spacing Spacing:
      input(id="spacing", type="range", name="spacing", min="10", max="200", v-model="spacing")
      label(for='blur') Blur:
      input#blur(type='range', name='blur', min='0', max='25', v-model="blur")
      label(for='base') Base Color
      input#base(type='color', name='base', v-model="base")
    img(
      src="https://source.unsplash.com/7bwQXzbF6KE/800x500",
      :style="{padding: spacing + 'px', background: base, filter: `blur(${blur}px)`}"
    )
</template>

<style lang="postcss" scoped>
section {
  background: #193549;
  font-size: 50px;
}
input {
  @apply mx-5;
  width: 100px;
}
</style>

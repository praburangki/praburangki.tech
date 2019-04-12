<template lang="pug">
  .mb-24.flex.flex-wrap
    .md__w-1--6.text-center.w-1--2.mt-6(v-for="name in names")
      .iconContainer.flex.flex-col.items-center.h-full
        .my-auto.sm__w-24.w-16
          component(:is="name.component")
        .mt-5.text-centered {{ name.name }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import iconComponents from '~/components/Icons';

@Component
export default class SkillsIcon extends Vue {
  names = [...iconComponents];
}
</script>


<style lang="scss" scoped>
svg {
  filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 1));
}
</style>

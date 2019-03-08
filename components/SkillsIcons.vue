<template lang="pug">
  .mb-24.flex.flex-wrap
    .md__w-1--6.text-center.w-1--2.mt-6(v-for="name in names")
      .iconContainer.flex.flex-col.items-center.h-full
        div
        .iconSvg
          component(:is="name.component")
        .iconName.has-text-centered {{ name.name }}
</template>

<script>
import iconComponents from '~/components/Icons';

export default {
  data: () => ({
    names: [...iconComponents],
  }),
};
</script>


<style lang="scss" scoped>
.iconContainer {
  /* margin-top: 30px; */

  > div:first-child {
    visibility: hidden;
    margin-bottom: 20px;
  }

  .iconSvg {
    width: 80px;
    margin-top: auto;
    margin-bottom: auto;

    @media screen and (min-width: 512px) {
      width: 100px;
    }

    svg {
      filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 1));
    }
  }

  .iconName {
    // margin-top: auto;
    margin-top: 20px;
  }
}
</style>

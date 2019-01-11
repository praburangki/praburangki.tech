<template lang="pug">
  .columns.is-mobile.is-multiline
    .column.has-text-centered.is-2-tablet.is-6-mobile(v-for="name in names")
      .iconContainer
        div halo
        .iconSvg
          component(:is="name.component")
        .iconName.has-text-centered {{ name.name }}
</template>

<script>
import iconComponents from '~/components/Icons';

export default {
  components: {},
  data: () => ({
    names: [...iconComponents]
  })
};
</script>


<style lang="scss" scoped>
.iconContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
      filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 1));
    }
  }

  .iconName {
    // margin-top: auto;
    margin-top: 20px;
  }
}
</style>

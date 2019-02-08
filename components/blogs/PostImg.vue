<script>
export default {
  props: {
    cover: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    }
  },
  computed: {
    postImg() {
      const slugUrl = this.$route.params.slug;
      const imgSrc = this.cover
        ? require(`~/blogPosts/images/${slugUrl}.jpg`)
        : require(`~/blogPosts/images/${slugUrl}/${this.name}`);
      const paddingBottom = (imgSrc.height / imgSrc.width) * 100;

      return { padding: { paddingBottom: `${paddingBottom}%` }, ...imgSrc };
    }
  }
};
</script>

<template lang="pug">
  figure
    .image-holder
      .placeholder(:style="postImg.padding")
      img(
        :data-srcset="postImg.srcSet",
        :src="postImg.placeholder",
        class="lazyload"
      )
    figcaption(v-if="!cover") {{ caption }}
</template>

<style lang="scss" scoped>
figure {
  margin-top: 44px;
  margin-bottom: 80px;

  .image-holder {
    position: relative;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }

  figcaption {
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
    width: 100%;
    margin-top: 10px;
    opacity: 0.68;
  }
}
</style>

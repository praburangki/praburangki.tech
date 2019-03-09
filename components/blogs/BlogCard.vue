<template lang="pug">
  .column.is-12-mobile.is-6-tablet
    nuxt-link(:to="`/posts/${slug}`").blogsCard
      .thumbnail(:style="{'background-image': `url('${coverImg}')`}")
      .description.has-text-centered
        .is-size-5: strong {{ title }}
        p {{ publishedAt }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    publishedAt: {
      type: String,
      default: '',
    },
  },
  computed: {
    coverImg() {
      const coverImg = require(`~/blogPosts/images/${this.slug}/cover.jpg`);

      return coverImg;
    },
  },
};
</script>


<style lang="scss" scoped>
@import '~/designs/mixins/_media.scss';
.column {
  margin-bottom: 70px;
}

.blogsCard {
  cursor: pointer;
  background-color: #eaeaea;
  color: #3a3939;
  border-radius: 2px;
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  padding: 0 1rem 1rem 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  .thumbnail {
    position: relative;
    width: 100%;
    top: -20px;
    overflow: hidden;
    margin: 0 auto;
    height: 180px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.75);
    background-size: cover;
    background-position: center;

    @include media-min(767px) {
      width: 85%;
    }

    img {
      position: absolute;
      width: 100%;
      left: 50%;
      top: 50%;
      height: auto;
      transform: translate(-50%, -50%);
    }
  }

  .description {
    margin-top: 40px;
    margin-bottom: 40px;
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin-top: 20px;
    }
  }
}
</style>

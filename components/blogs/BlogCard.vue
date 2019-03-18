<template lang="pug">
  .w-full.md__w-1--2.py-3.lg__px-5.md__px-3.column
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
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 1rem 1rem 1rem;
  color: #3a3939;
  cursor: pointer;
  background-color: #eaeaea;
  border-radius: 2px;
  box-shadow: 10px 10px 93px 0 rgba(0, 0, 0, 0.75);

  .thumbnail {
    position: relative;
    top: -20px;
    width: 100%;
    height: 180px;
    margin: 0 auto;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.75);

    @include media-min(767px) {
      width: 85%;
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: auto;
      transform: translate(-50%, -50%);
    }
  }

  .description {
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin-top: 20px;
    }
  }
}
</style>

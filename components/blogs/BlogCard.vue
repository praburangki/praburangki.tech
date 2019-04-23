<template lang="pug">
  .w-full.md__w-1--2.py-3.lg__px-5.md__px-3.mb-16
    nuxt-link(:to="cardMeta.link").blogsCard
      .thumbnail(:style="{'background-image': `url('${cardMeta.coverImg}')`}")
      .flex.flex-col.flex-1.items-center.justify-center.text-center
        h3.text-xl.font-bold.my-3 {{ title }}
        p {{ publishedAt }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  props: {
    title: String,
    slug: String,
    publishedAt: String,
    blogPost: {
      type: Boolean,
      default: false,
    },
  },
})
export default class BlogCard extends Vue {
  title: string;
  slug: string;
  publishedAt: string;
  blogPost: boolean;

  get cardMeta() {
    const meta = {
      link: `/projects/${this.slug}`,
      coverImg: '',
    };

    if (this.blogPost) {
      meta.link = `/posts/${this.slug}`;
      meta.coverImg = require(`~/blogPosts/images/${this.slug}/cover.jpg`);
    } else {
      meta.coverImg = require(`~/assets/images/projects/${this.slug}.jpg`);
    }

    return meta;
  }
}
</script>

<style lang="scss" scoped>
@import '~/designs/mixins/_media.scss';
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
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.75);

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
}
</style>

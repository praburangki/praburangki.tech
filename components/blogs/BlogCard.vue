<template lang="pug">
  .column.is-12-mobile.is-6-tablet
    nuxt-link(:to="`/posts/${slug}`").blogsCard
      .thumbnail(style="background-image: url('https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg')")
      .description
        .blogTitle.is-size-5.has-text-centered {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    }
  }
};
</script>


<style lang="scss" scoped>
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
    width: 85%;
    top: -20px;
    overflow: hidden;
    margin: 0 auto;
    height: 180px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.75);
    background-size: cover;
    background-position: center;

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
    flex: 1 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

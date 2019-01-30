<template lang="pug">
  div
    Coba(:md="md")
</template>

<script>
import Coba from '~/components/Coba';
export default {
  async asyncData(apa) {
    const md = await import(`~/blogPosts/${apa.params.slug}.md`);

    console.log(md);

    return { md };
  },
  components: {
    Coba
  }
};
</script>

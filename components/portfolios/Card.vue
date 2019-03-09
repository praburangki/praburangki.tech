<script>
import { iconObj } from '~/components/Icons';

export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    isActive: false,
    animated: false,
    icons: { ...iconObj },
  }),
  methods: {
    toggleCard() {
      this.isActive = !this.isActive;
      this.animated = true;
      setTimeout(() => {
        this.animated = false;
      }, 800);
    },
  },
};
</script>


<template lang="pug">
  .portoCardColumn.lg__w-1--3.p-3.md__w-1--6.w-full
    div.portoCard(:class="{ 'cardActive': isActive, [item.className]: true }")
      .titleBox.text-sm
        strong {{ item.name }}
        span {{ item.short }}
      .cardContent
        .img-container
          img(
            :data-srcset="item.imageSrc.srcSet",
            :src="item.imageSrc.placeholder",
            class="lazyload"
            :alt="item.altText"
          )
        .cardDescription
          div.longDesc {{ item.long }}
          br
          a.button(target="_blank" rel="noopener noreferrer" :href="item.link")
            span Visit Site
            span.iconLink.h-6.w-6
              svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 18 18')
                g(fill='none', fill-rule='evenodd')
                  path(d='M-3-3h24v24H-3z')
                  path(fill='#EAEAEA', fill-rule='nonzero', d='M15 16H3a1 1 0 0 1-1-1V3c0-.5.5-1 1-1h5c.6 0 1-.5 1-1s-.4-1-1-1H2a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-6c0-.6-.4-1-1-1a1 1 0 0 0-1 1v5c0 .6-.4 1-1 1zM11 1c0 .5.4 1 1 1h2.6l-9.1 9.1a1 1 0 1 0 1.4 1.4l9.1-9V6c0 .6.4 1 1 1s1-.4 1-1V0h-6a1 1 0 0 0-1 1z')
      a.cardBtnAction(
        @click="toggleCard"
        :class="{ 'fa-spin-fast': animated }"
      )
        svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 48 48', style="width: 40%", v-if="isActive")
          path(fill='#FFF', d='M28.2 24L47.1 5A3 3 0 1 0 42.8 1L24 19.7 5 1A3 3 0 1 0 1 5L19.7 24 1 42.9A3 3 0 1 0 5 47L24 28.2l18.9 18.9a3 3 0 0 0 4.2 0 3 3 0 0 0 0-4.3L28.2 24z')
        svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 408 408' v-else)
          path(fill='#FFF', d='M204 102c28 0 51-23 51-51S232 0 204 0s-51 23-51 51 23 51 51 51zm0 51c-28 0-51 23-51 51s23 51 51 51 51-23 51-51-23-51-51-51zm0 153c-28 0-51 23-51 51s23 51 51 51 51-23 51-51-23-51-51-51z')
      .cardFooter
        h4 Tech Stack
        .techStack(v-for="stack in item.techStack")
          component(:is="icons[stack].component")
</template>

<style lang="scss" scoped>
@import './styles/cards.scss';
</style>

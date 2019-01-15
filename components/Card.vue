<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    short: {
      type: String,
      default: ''
    },
    long: {
      type: String,
      default: ''
    },
    techStack: {
      type: Array,
      default: () => []
    },
    link: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    isActive: false,
    animated: false
  }),
  methods: {
    toggleCard() {
      this.isActive = !this.isActive;
      this.animated = true;
      setTimeout(() => {
        this.animated = false;
      }, 800);
    }
  }
};
</script>


<template lang="pug">
  .column.is-12-mobile.is-6
    article.portoCard.Carriage(:class="{'cardActive': isActive}")
      h2
        strong {{ name }}
        span {{ short }}
      .cardContent
        .img-container
          img(src='http://u.lorenzoferrara.net/marlenesco/material-card/thumb-christopher-walken.jpg')
        .cardDescription
          div {{ long }}
          br
          a.button
            span Visit Site
            span.icon.is-small.iconLink
              svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 18 18')
                g(fill='none', fill-rule='evenodd')
                  path(d='M-3-3h24v24H-3z')
                  path(fill='#EAEAEA', fill-rule='nonzero', d='M15 16H3a1 1 0 0 1-1-1V3c0-.5.5-1 1-1h5c.6 0 1-.5 1-1s-.4-1-1-1H2a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-6c0-.6-.4-1-1-1a1 1 0 0 0-1 1v5c0 .6-.4 1-1 1zM11 1c0 .5.4 1 1 1h2.6l-9.1 9.1a1 1 0 1 0 1.4 1.4l9.1-9V6c0 .6.4 1 1 1s1-.4 1-1V0h-6a1 1 0 0 0-1 1z')
      a.cardBtnAction(
        @click="toggleCard"
        :class="{'fa-spin-fast': animated}"
      )
        svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 48 48', style="width: 40%", v-if="isActive")
          path(fill='#FFF', d='M28.2 24L47.1 5A3 3 0 1 0 42.8 1L24 19.7 5 1A3 3 0 1 0 1 5L19.7 24 1 42.9A3 3 0 1 0 5 47L24 28.2l18.9 18.9a3 3 0 0 0 4.2 0 3 3 0 0 0 0-4.3L28.2 24z')
        svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 408 408' v-else)
          path(fill='#FFF', d='M204 102c28 0 51-23 51-51S232 0 204 0s-51 23-51 51 23 51 51 51zm0 51c-28 0-51 23-51 51s23 51 51 51 51-23 51-51-23-51-51-51zm0 153c-28 0-51 23-51 51s23 51 51 51 51-23 51-51-23-51-51-51z')
      .cardFooter
        h4 Tech Stack
        a.fa.fa-fw.fa-facebook
        a.fa.fa-fw.fa-twitter
        a.fa.fa-fw.fa-linkedin
        a.fa.fa-fw.fa-google-plus
</template>

<style lang="scss" scoped>
@import '~/assets/css/_media.scss';
@import '~/assets/css/components/_cards.scss';

$carriage: #f44336;

.fa-spin-fast {
  animation: fa-spin-fast 0.2s infinite linear;
}

.button {
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  color: #eaeaea;
  background-color: $carriage;
  box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.7);

  span.iconLink {
    margin-left: 15px !important;
  }

  svg {
    width: 80%;
    // margin-left: 20px;
  }
}

@keyframes fa-spin-fast {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

.portoCard {
  position: relative;
  height: 0;
  padding-bottom: calc(100% - 16px);
  margin-bottom: 6.6em;

  h2 {
    @include trouble(calc(100% - 16px), null, null, 0);
    width: 100%;
    padding: 10px 16px;
    color: #fff;
    font-size: 1.4rem;
    line-height: 1.6em;
    margin: 0;
    z-index: 10;
    transition: all 0.3s;

    span {
      display: block;
      font-size: 1.1rem;
    }

    &:before,
    &:after {
      content: ' ';
      @include trouble(-16px, null, null, 0);
      width: 0;
      border: 8px solid;
      transition: all 0.3s;
    }

    &:after {
      top: auto;
      bottom: 0;
    }
  }

  &.cardActive {
    @media screen and (width: 768px) {
      padding-bottom: 300px;
    }

    @media screen and (max-width: 767px) {
      padding-bottom: 0;
      height: auto;
    }

    h2 {
      top: 0;
      padding: 10px 16px 10px 90px;

      &:before {
        top: 0;
      }
      &:after {
        bottom: -16px;
      }
    }
  }

  .cardContent {
    @include trouble(0, 0, 16px, 16px);
    transition: all 0.3s;
  }

  .cardBtnAction {
    display: flex;
    justify-content: center;
    @include trouble(15px, 16px);
    border-radius: 50%;
    border: 5px solid;
    width: 54px;
    height: 54px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    z-index: 20;
    transition: all 0.3s;

    svg {
      width: 65%;
    }
  }

  &.cardActive .cardBtnAction {
    top: 62px;
  }

  .cardDescription {
    @include trouble(100%, 30px, 54px, 30px);
    overflow: hidden;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: all 1.2s;
  }

  .cardFooter {
    height: 0;
    overflow: hidden;
    transition: all 0.3s;

    h4 {
      @include trouble(200px, null, null, 30px);
      padding: 0;
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      transition: all 1.4s;
    }

    a {
      display: block;
      float: left;
      position: relative;
      width: 52px;
      height: 52px;
      margin-left: 5px;
      margin-bottom: 15px;
      font-size: 28px;
      color: #fff;
      line-height: 52px;
      text-decoration: none;
      top: 200px;

      &:nth-child(1) {
        transition: all 0.5s;
      }
      &:nth-child(2) {
        transition: all 0.6s;
      }
      &:nth-child(3) {
        transition: all 0.7s;
      }
      &:nth-child(4) {
        transition: all 0.8s;
      }
      &:nth-child(5) {
        transition: all 0.9s;
      }
    }
  }
  .img-container {
    overflow: hidden;
    @include trouble(0, null, null, 0);
    width: 100%;
    height: 100%;
    z-index: 3;
    transition: all 0.3s;
  }

  &.cardActive {
    .img-container {
      border-radius: 50%;
      left: 0;
      top: 12px;
      width: 60px;
      height: 60px;
      z-index: 20;
    }
    .cardContent {
      padding-top: 5.6em;
      @media screen and (max-width: 767px) {
        position: relative;
        margin-right: 16px;
      }
    }
    .cardDescription {
      color: #1d1d1d;
      top: 50px;
      padding-top: 5.6em;
      opacity: 1;
      filter: alpha(opacity=100);
      @media screen and (max-width: 767px) {
        @include trouble(auto, auto, 0, auto, relative);
        padding: 50px 30px 70px 30px;
      }
    }
    .cardFooter {
      overflow: visible;
      @include trouble(calc(100% - 16px), 0, null, 16px);
      height: 82px;
      padding-top: 15px;
      padding-left: 25px;
      a {
        top: 0;
      }
      h4 {
        top: -32px;
      }
    }
  }

  &.Carriage {
    @include cardItem($carriage, #b71c1c);
  }
}
</style>

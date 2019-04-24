<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  layout: 'javascript30',
})
export default class ClockPage extends Vue {
  head() {
    return {
      title: 'Clock - JS 30',
    };
  }

  created() {
    this.$store.commit('js30/setTitle', 'Clock');
  }

  mounted() {
    setInterval(this.setDate, 1000);
  }

  secondDeg: number = 0;
  minuteDeg: number = 0;
  hourDeg: number = 0;

  transformHands(degrees) {
    return {
      transform: `rotate(${degrees}deg)`,
    };
  }

  setDate() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const mins = currentTime.getMinutes();
    const hours = currentTime.getHours();

    this.secondDeg = (seconds / 60) * 360 + 90;
    this.minuteDeg = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    this.hourDeg = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  }
}
</script>

<template lang="pug">
  .wrapper
    .clock
      .clock-face
        .hand(:style="transformHands(secondDeg)")
        .hand(:style="transformHands(minuteDeg)")
        .hand(:style="transformHands(hourDeg)")
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply flex flex-1 justify-center items-center;
  background-color: #018ded;
  height: 400px;
}

.clock {
  @apply w-64 h-64 rounded-half relative p-4;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
  border: 15px solid white;
}

.clock-face {
  @apply w-full h-full relative;
  transform: translateY(-3px); /* account for the height of the clock hands */
}

.hand {
  @apply bg-black absolute;
  width: 50%;
  height: 6px;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
</style>

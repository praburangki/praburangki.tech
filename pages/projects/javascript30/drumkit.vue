<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  layout: 'javascript30',
})
export default class DrumkitPage extends Vue {
  head() {
    return {
      title: 'Drumkit - JS 30',
    };
  }

  keySounds = [];

  created() {
    this.$store.commit('js30/setTitle', 'Drumkit');
  }

  mounted() {
    this.keySounds = [
      this.generateKeys(65, 'A', 'CLAP', 'clap.wav'),
      this.generateKeys(83, 'S', 'HIHAT', 'hihat.wav'),
      this.generateKeys(68, 'D', 'KICK', 'kick.wav'),
      this.generateKeys(70, 'F', 'OPENHAT', 'openhat.wav'),
      this.generateKeys(71, 'G', 'BOOM', 'boom.wav'),
      this.generateKeys(72, 'H', 'RIDE', 'ride.wav'),
      this.generateKeys(74, 'J', 'SNARE', 'snare.wav'),
      this.generateKeys(75, 'K', 'TOM', 'tom.wav'),
      this.generateKeys(76, 'L', 'TINK', 'tink.wav'),
    ];

    window.addEventListener('keydown', this.playSound);
  }

  beforeDestroy() {
    window.removeEventListener('keydown', this.playSound);
  }

  generateKeys(keyCode, keyName, soundName, audio) {
    return {
      keyCode,
      keyName,
      soundName,
      audio: new Audio(`/js30/sounds/${audio}`),
      isPlaying: false,
    };
  }

  playSound(e) {
    const pressed = this.keySounds.find(key => key.keyCode === e.keyCode);

    if (!pressed) return;
    pressed.audio.currentTime = 0;
    pressed.audio.play();
    pressed.isPlaying = true;
  }

  removeTransition(e, key) {
    if (e.propertyName !== 'transform') return;
    key.isPlaying = false;
  }
}
</script>

<template lang="pug">
  .keys
    .key(
      v-for="sounds in keySounds",
      :key="sounds.keyCode",
      :class="{ 'playing': sounds.isPlaying }",
      @transitionend="removeTransition($event, sounds)"
    )
      span.keyChar {{ sounds.keyName }}
      span.sound {{ sounds.soundName }}
</template>

<style lang="scss" scoped>
.keys {
  @apply flex flex-1 min-h-screen justify-center items-center flex-wrap content-center relative;

  &::after {
    @apply absolute pin-t pin-l w-full h-full;
    content: '';
    z-index: -1;
    opacity: 0.6;
    background: url(https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)
      bottom center;
    background-size: cover;
  }
}

.key {
  @apply m-2 rounded w-24 text-center text-white px-1 py-2;
  border: 0.3rem solid black;
  transition: all 0.07s ease;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 0.5rem black;
}

.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1em #ffc600;
}

.keyChar {
  @apply block text-5xl;
}

.sound {
  @apply text-xs;
  color: #ffc600;
}
</style>

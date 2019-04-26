<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  layout: 'javascript30',
})
export default class CSSVariablesPage extends Vue {
  head() {
    return {
      title: 'Flex Gallery - JS 30',
    };
  }

  created() {
    this.$store.commit('js30/setTitle', 'Flex Gallery');
  }

  panels = [
    {
      id: 'panel1',
      top: `Hey`,
      middle: `Let's`,
      bottom: 'Dance',
      isOpen: false,
      isActive: false,
    },
    {
      id: 'panel2',
      top: `Give`,
      middle: `Take`,
      bottom: 'Receive',
      isOpen: false,
      isActive: false,
    },
    {
      id: 'panel3',
      top: 'Experience',
      middle: 'It',
      bottom: 'Today',
      isOpen: false,
      isActive: false,
    },
    {
      id: 'panel4',
      top: 'Give',
      middle: 'All',
      bottom: 'You can',
      isOpen: false,
      isActive: false,
    },
    {
      id: 'panel5',
      top: 'Life',
      middle: 'In',
      bottom: 'Motion',
      isOpen: false,
      isActive: false,
    },
  ];

  toggleOpen(panel) {
    panel.isOpen = !panel.isOpen;
  }

  toggleActive(evt, panel) {
    if (evt.propertyName.includes('flex')) {
      panel.isActive = !panel.isActive;
    }
  }
}
</script>

<template lang="pug">
  section.panels
    .panel(
      v-for="pan in panels",
      :key="pan.id",
      :class="[{ open: pan.isOpen, 'open-active': pan.isActive }, pan.id]"
      @transitionend="toggleActive($event, pan)"
      @click="toggleOpen(pan)"
    )
      p {{ pan.top }}
      p {{ pan.middle }}
      p {{ pan.bottom }}
</template>

<style lang="postcss" scoped>
.panels {
  @apply flex min-h-screen overflow-hidden;
}

.panel {
  @apply text-center flex flex-col flex-1 justify-center items-center cursor-pointer;
  background: #6b0f9c;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
    flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  font-size: 20px;
  background-size: cover;
  background-position: center;
}

.panel1 {
  background-image: url(https://source.unsplash.com/gYl-UtwNg_I/500x500);
}
.panel2 {
  background-image: url(https://source.unsplash.com/rFKUFzjPYiQ/500x500);
}
.panel3 {
  background-image: url(https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=500&h=500&fit=crop&s=967e8a713a4e395260793fc8c802901d);
}
.panel4 {
  background-image: url(https://source.unsplash.com/ITjiVXcwVng/500x500);
}
.panel5 {
  background-image: url(https://source.unsplash.com/3MNzGlQM7qs/500x500);
}

.panel > p {
  @apply m-0 w-full flex justify-center items-center;
  transition: transform 0.5s;
  flex: 1 0 auto;
  text-transform: uppercase;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  font-size: 1.5rem;
}

.panel > *:first-child {
  transform: translateY(-100%);
}
.panel.open-active > *:first-child {
  transform: translateY(0);
}
.panel > *:last-child {
  transform: translateY(100%);
}
.panel.open-active > *:last-child {
  transform: translateY(0);
}

.panel p:nth-child(2) {
  font-size: 3rem;
}

.panel.open {
  flex: 5;
  font-size: 40px;
}
</style>

<template lang="pug">
  .section
    .container
      header.flex.justify-between.mb-10
        nuxt-link(to="/projects").button.text-white.bg-primary < &nbsp; All Projects
        nuxt-link(to="/").button.text-white.bg-primary HOME
    main
      .container
        h1.text-center.mb-16 Project - {{ $store.state.projects.title }}
      v-app(light)
        v-content
          v-container
            nuxt
</template>

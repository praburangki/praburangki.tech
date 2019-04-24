<template lang="pug">
  .section
    .container
      header.flex.justify-between.mb-10
        nuxt-link(to="/projects/javascript30").button.text-white.bg-primary < &nbsp; Javascript 30
        nuxt-link(to="/").button.text-white.bg-primary HOME
    main
      .container
        h1.text-center.mb-16 Javascript 30 - {{ $store.state.js30.title }}
      nuxt
</template>

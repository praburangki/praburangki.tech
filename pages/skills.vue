<template lang="pug">
  div
    .is-size-2.mainTitle
      .isFlex.redLine
      .isFlex.text.has-text-centered SKILLS
      .isFlex.redLine
    section.section
      .container
        .columns.is-centered
          .column.is-narrow
            p.long-par.has-text-centered
              |My passion lies in two major areas, <strong>software development</strong> and <strong>community building</strong>.
              |Building things that can benefit a lot of people and to help other developers to grow is how I enjoy my life.
        hr
        .is-size-3.has-text-centered Development
        .is-size-5.has-text-centered Here is a list of technologies that I'm experienced in:
        SkillsIcons
        hr
        .is-size-3.has-text-centered Community
        .columns.is-centered
          .column.is-narrow
            p.long-par.has-text-centered
              |I love to share and contribute to the local communities.
              |I've been giving talks and workshops in various meetups and conferences.
              |Currently I'm the manager of <strong>GDG Bali</strong>.
            .gdgIcon
              a(href="https://gdgbali.com", target="_blank")
                svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 437.9 109.4')
                  defs
                    radialgradient#a(cx='-218.1', cy='315.5', r='3.3', gradientTransform='matrix(11.5 0 0 -11.5 2558.8 3716.2)', gradientUnits='userSpaceOnUse')
                      stop(offset='0', stop-color='#bf360c', stop-opacity='.2')
                      stop(offset='1', stop-color='#bf360c', stop-opacity='0')
                    radialgradient#b(cx='-221.7', cy='318.9', r='2.6', gradientTransform='matrix(14.4 0 0 -14.4 3242.4 4679.4)', gradientUnits='userSpaceOnUse')
                      stop(offset='0', stop-color='#263238', stop-opacity='.2')
                      stop(offset='1', stop-color='#263238', stop-opacity='0')
                    radialgradient#c(cx='-236.4', cy='332.7', r='1.7', gradientTransform='matrix(67.78 0 0 -67.78 16022 22551.2)', gradientUnits='userSpaceOnUse')
                      stop(offset='0', stop-color='#fff', stop-opacity='.1')
                      stop(offset='1', stop-color='#fff', stop-opacity='0')
                  g(data-name='Layer 2')
                    g(data-name='Layer 1')
                      g(data-name='Group')
                        g(data-name='Group 2')
                          path(d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Path', fill='#ffc107', d='M50.1 87.3l-9-15.6-21.5 37.6h18.5l12.3-21.5-.3-.5z')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Shape', fill='#0f9d58', d='M31.4 54.6l9.7 17.1-21.5 37.6H.1l31.3-54.6v-.1z')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Shape', style='isolation:isolate', fill='#bf360c', opacity='.2', d='M38.1 108.5h-18l-.5.8h18.5l12.3-21.5-.3-.5-12 21.2z')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Shape', style='isolation:isolate', fill='#263238', opacity='.2', d='M.6 108.5l-.5.8h19.5l.4-.8H.6z')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Shape', style='isolation:isolate', fill='#fff', opacity='.2', d='M.1 109.3h.5l31-54.2-.2-.5L.1 109.3z')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Path 2', fill='url(#a)', d='M50.4 87.8l-9.3-16.1-2.2 3.9 11.5 12.1v.1z')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Path 3', fill='url(#b)', d='M38.9 75.6l2.3-4.1-9.8-16.9-4.6 8.1 12 12.9h.1z')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          g(data-name='Group 3')
                            g(data-name='Group 4')
                              path(data-name='Path 4', fill='#4285f4', d='M19.6 0H.1l50.3 87.8 9.7-17.2L19.6 0z')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Shape', d='M66.4 59.8a10.3 10.3 0 0 0 0-10.2L38 0H19.5l40.6 70.6z', fill='#db4437')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Shape', style='isolation:isolate', fill='#1a237e', opacity='.2', d='M60.1 70.7l-.2-.4-9.5 16.6L.6 0H.1l50.3 87.8 9.7-17.2v.1z')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Shape', d='M38 1l28.4 49.5a10.3 10.3 0 0 1 1.3 4.6 10.3 10.3 0 0 0-1.3-5.5L38 0H0l.6.8z', style='isolation:isolate', fill='#fff', opacity='.2')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Path 5', d='M60.1 70.8l6.3-11a10.3 10.3 0 0 0 1.3-5.5 10.3 10.3 0 0 1-1.3 4.7l-6.7 11.4z', style='isolation:isolate', fill='#3e2723', opacity='.2')
                          path(data-name='Shape', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='none')
                          path(data-name='Path 6', d='M66.4 49.5L38 .1H0l31.4 54.6L.1 109.4h38l28.3-49.6a10.3 10.3 0 0 0 0-10.3z', fill='url(#c)')
                      g(style='isolation:isolate', fill='#fff')
                        path(d='M322 79V20.2h21.3a17.1 17.1 0 0 1 12 4.6 14.7 14.7 0 0 1 5 11.4q0 8.7-8 12.3v.3a14.3 14.3 0 0 1 7.2 5.1 13.6 13.6 0 0 1 2.7 8.4 15.5 15.5 0 0 1-5.3 12 17.7 17.7 0 0 1-12.5 4.7zm7.5-51.6v18h13.8a9.1 9.1 0 0 0 6.7-2.7 8.7 8.7 0 0 0 0-12.6 8.7 8.7 0 0 0-6.4-2.7zm0 25v19.4h15.2a9.7 9.7 0 0 0 9.8-9.7 9.2 9.2 0 0 0-2.9-6.7 9.8 9.8 0 0 0-7.2-3zM384.7 37.5q8.4 0 13.3 4.4t4.8 12.3V79h-7.2v-5.6h-.4q-4.6 7-12.4 7a16.2 16.2 0 0 1-11.2-4 12.6 12.6 0 0 1-4.4-9.9 12 12 0 0 1 4.7-9.9q4.7-3.7 12.6-3.7a22.3 22.3 0 0 1 11 2.5v-1.8a8.6 8.6 0 0 0-3-6.7 10.7 10.7 0 0 0-7.4-2.7 11.6 11.6 0 0 0-10 5.3l-6.6-4.2q5.5-7.8 16.2-7.8zM375 66.7a6 6 0 0 0 2.5 5 9.2 9.2 0 0 0 5.9 2 12 12 0 0 0 8.5-3.6 11 11 0 0 0 3.7-8.3Q392 59 385.7 59a12.8 12.8 0 0 0-7.7 2.2 6.6 6.6 0 0 0-3 5.5zM418.9 20.2V79h-7.6V20.2zM437.9 24.9a5.3 5.3 0 1 1-9.2-3.8A5.3 5.3 0 0 1 438 25zm-1.6 13.9V79h-7.6V38.8z')
                      g(style='isolation:isolate', fill='#fff')
                        path(d='M158.5 52.3q0 13-7.8 20.9-8.7 9.2-23 9.2a31.3 31.3 0 0 1-23-9.4 31.5 31.5 0 0 1-9.4-23.2 31.5 31.5 0 0 1 9.5-23.2 31.3 31.3 0 0 1 23-9.4 34.7 34.7 0 0 1 13 2.4 26 26 0 0 1 10 6.9l-5.8 5.8a19.3 19.3 0 0 0-7.5-5.5 24.6 24.6 0 0 0-9.8-2 23.5 23.5 0 0 0-17.2 7 24.6 24.6 0 0 0-7 18 24.6 24.6 0 0 0 7 17.8 23.5 23.5 0 0 0 17.2 7q9.4 0 15.5-5.2t7.2-14.3h-22.6v-7.5H158a26.9 26.9 0 0 1 .5 4.7zM168.2 81V18.6h19.1q14.3 0 23 8.6t8.7 22.6q0 14-8.7 22.6t-23 8.6zm8-54.8v47.1h11.1q10.9 0 17.2-6.2t6.3-17.3q0-11-6.3-17.3t-17.2-6.3zM288.6 52.3q0 13-7.8 20.9-8.7 9.2-23 9.2a31.3 31.3 0 0 1-23-9.4 31.5 31.5 0 0 1-9.4-23.2 31.5 31.5 0 0 1 9.5-23.2 31.3 31.3 0 0 1 23-9.5 34.7 34.7 0 0 1 13 2.5 26 26 0 0 1 10 6.9l-5.8 5.7a19.3 19.3 0 0 0-7.5-5.4 24.6 24.6 0 0 0-9.8-2 23.5 23.5 0 0 0-17.2 7 24.6 24.6 0 0 0-7 18 24.6 24.6 0 0 0 7 17.8 23.5 23.5 0 0 0 17.2 7q9.4 0 15.6-5.2t7.1-14.4H258v-7.4H288a27 27 0 0 1 .5 4.7z')

</template>

<script>
import SkillsIcons from '~/components/SkillsIcons';

export default {
  components: {
    SkillsIcons
  }
};
</script>

<style lang="scss" scoped>
.is-size-3 {
  margin-bottom: 15px;
}

.gdgIcon {
  max-width: 300px;
  margin: 50px auto;
}
</style>

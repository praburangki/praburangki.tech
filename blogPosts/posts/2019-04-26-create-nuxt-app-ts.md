---
title: Create Nuxt App Typescript
publishedAt: 2019-04-26 00:00
description: Seiringan dengan pesatnya perkembangan dunia JavaScript, tentu kamu pasti ingin atau sudah pernah mencicipi berbagai library maupun framework. Mungkin kamu punya beberapa project yang di dalamnya...
---

### Nuxt.js

[Nuxt.js](https://nuxtjs.org) merupakan sebuah perangkat untuk membuat sebuah aplikasi web berbasis [Vue.js](https://vuejs.org). Beberapa keunggulan dari Nuxt.js adalah kita dapat membuat sebuah aplikasi web dengan metode _Server Side Rendering (SSR)_ dan _generate static_. Metode-metode tersebut dapat meningkatkan performa dan _Search Engine Optimazation (SEO)_ dari situs web kita. Di sini saya tidak akan terlalu banyak menjelaskan tentang Nuxt.js namun jika kalian ingin tahu lebih lanjut ada baiknya kunjungin [pranala berikut](https://medium.com/vuejs-id/nuxt-1-berkenalan-dengan-nuxt-js-6368ab9562c2). Yang ingin saya bahas di sini adalah sebuah perangkat yang dapat mempermudahkan kita untuk memulai sebuah aplikasi berbasis Nuxt.js, yaitu **_create-nuxt-app_**.

### [**_create-nuxt-app_**](https://github.com/nuxt/create-nuxt-app)

Seringkali ketika kita ingin memulai sebuah proyek baru kita bingung harus memulai dari mana. Apalagi jika kita sudah ada bayangan apa saja yang dibutuhkan untuk proyek tersebut. Misalnya ingin pakai peladen apa, lalu bagaimana cara menambahkan sebuah kerangka _CSS_ (contohnya _Bootstrap_), dilanjutkan dengan ingin memakai kerangka _testing_ yang mana, sampai dengan fitur-fitur lainnya yang ingin diikut sertakan (contohnya _PWA_). Tentu jika kita cukup sering bikin proyek baru hal tersebut akan terasa sangat repetitif.

Itulah tujuan dari perangkat **_create-nuxt-app_** ini, dengan hanya menjalankan satu perintah saja kita sudah disuguhkan dengan berbagai macam pilihan apa saja yang ingin kita ikut sertakan ke dalam proyek yang ingin kita buat. Anda tinggal tunggu prosesnya selesai lalu langsung bisa terjun mengembangkan proyek kalian dan tidak perlu khawatir untuk konfigurasi hal-hal yang sudah disediakan. Anda dapat mengunjungi [tautan githubnya](https://github.com/nuxt/create-nuxt-app) untuk melihat lebih lanjut.

### [**_create-nuxt-app-ts_**](https://github.com/praburangki/create-nuxt-app-ts)

Belakangan ini saya lebih suka mengembangkan sebuah proyek menggunakan **_typescript_** dan **_pug_**. Saya juga cukup sering banyak menghabiskan waktu dalam konfigurasi susunan dan bagaimana untuk merapikan kode-kode di dalam proyek-proyek tersebut. Oleh karena saya belum menemukan format yang sesuai dengan keinginan saya, maka saya bikin sendiri sebuah perangkat untuk memulai sebuah proyek yaitu [**_create-nuxt-app-ts_**](https://github.com/praburangki/create-nuxt-app-ts). Perangkat ini dibuat sama persis dengan versi orisinil yang dibuat oleh tim _nuxt.js_. Namun ada beberapa fitur yang saya tambahkan ke dalamnya diantaranya:

- [Typescript](http://typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Pug](https://pugjs.org)
- [Vuetify](https://vuetifyjs.com)

#### Typescript

Typescrtipt

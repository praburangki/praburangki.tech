---
title: Membuat Blog dengan NuxtJS
publishedAt: 2018-06-12 00:00
description: Seiringan dengan pesatnya perkembangan dunia JavaScript, tentu kamu pasti ingin atau sudah pernah mencicipi berbagai library maupun framework. Mungkin kamu punya beberapa project yang di dalamnya...
---

### Pendahuluan

Seiringan dengan pesatnya perkembangan dunia JavaScript, tentu kamu pasti ingin atau sudah pernah mencicipi berbagai library maupun framework. Mungkin kamu punya beberapa project yang di dalamnya memakai library/framework tertentu.

Misalnya tiap project terdapat [jquery](https://jquery.com/), atau jika kamu lebih suka bermain dengan back-end bisa jadi tiap project terdapat [express](https://expressjs.com/), atau jika kamu lebih suka dengan front-end bisa saja tiap project terdapat framework/library yang berbeda ([React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/), [Polymer](https://www.polymer-project.org/) dsb.), atau bisa saja kamu sudah terbiasa dengan satu library dan ingin mencoba library lain (dari React ke Vue).

Dengan bertambahnya project-project tersebut tentu saja kamu akan semakin bingung di mana kamu letakkan folder-folder tersebut di komputermu. Maka sudah saatnya kamu mencoba [**JSUI**](https://github.com/kitze/JSUI).

### JSUI

JSUI merupakan sebuah _UI Toolkit_ untuk mengelola berbagai aplikasi JavaScript. Memang _tool_ ini masih sangat baru sehingga masih banyak yang perlu disempurnakan, namun untuk saat ini bisa dibilang sangat membantu dan mengesankan!

Aku akan coba sertakan beberapa _screenshot_ bagi kamu yang masih penasaran.

Aku akan coba untuk _import_ beberapa project yang sudah/lagi aku kerjakan, tinggal tekan tombol _Import a project_ dan pilih folder yang kamu inginkan.

Folder yang barusan kamu pilih akan secara _default_ masuk ke grup _Others_ dan tentu saja nama grup itu bisa kamu _rename_. Di bagian kanan atas ada tiga tombol yang berfungsi untuk:

- Import project lain ke dalam grup tersebut

- _Rename_ nama grup tersebut

- Hapus grup tersebut

Nah yang menarik adalah menu-menu di atas. Di sana terdapat:

- Open Folder (Finder atau Explorer tergantung OS komputer)

- Open in Editor

- View package.json

- Rename

- Start (untuk menjalankan _command_ npm start)

- Open Repository

- Delete

Untuk editor aplikasi ini sudah secara otomatis memilih [VS Code](https://code.visualstudio.com/), sekilas aku lihat di _source code_ nya dan memang VS Code sudah diset secara _default_. Namun jika kamu _prefer_ editor lain jangan khawatir karena itu bisa kamu ubah di setting.

Jika kamu lihat kembali gambar di atas ada satu project yang berbeda *menu*nya dengan project lainnya. Itu karena di dalam satu folder tersebut tidak ditemukan file package.json di _root_ foldernya.

Jadi misalkan kamu ingin memakai [Sublime](https://www.sublimetext.com/) bisa coba dengan masukkan subl atau sublime. Atau kalau ingin memakai [Atom](https://atom.io/) bisa coba dengan atom. (_Disclaimer:_ aku belum sempat coba namun harusnya bisa berjalan dengan cara tersebut.)

Selain itu terdapat juga beberapa fitur menarik, yang pertama ada _Kill Port_. Jadi misalnya kamu lagi berada di satu project dan ingin pindah project lain kadang kamu akan mendapat pesan bahwa port tersebut sedang dipakai. Mungkin kamu lagi buka banyak _terminal_ dan lupa di window/tab mana port tersebut sedang berjalan, maka tombol ini berfungsi untuk mematikan tombol tersebut. Sangat berguna bukan?

Lalu ada tombol _css-to-js-converter_. Jika kamu sering bermain dengan React tentu css-in-js sangat _familiar_. Fitur ini berfungsi untuk mengubah CSS menjadi CSS-in-JS. Aku kira ini cukup jelas fungsinya.

Berikutnya ada tombol _Babel REPL_. Fitur ini berfungsi untuk kamu yang ingin coba-coba fitur-fitur terbaru dari JavaScript tapi belum _compatible_ di semua browser. Untuk kamu yang belum paham apa itu _Babel_ bisa coba cek [di sini](https://babeljs.io/).

Jika kamu coba buka sebuah project (klik di nama project) maka akan muncul tampilan ringkas dari file package.json. Kamu bisa langsung jalankan beberapa _scripts_ yang tertera di package.json dan akan otomatis membuka terminal di dalam aplikasi dan menjalankan perintah tersebut.

Terdapat juga list _dependencies_ yang terdapat pada project mu dan kamu pun bisa langsung tambahkan modul-modul lain dengan menekan tombol _add_. Di sebelah kanan tiap _package_ juga terdapat beberapa pilihan di mana kamu bisa: buka url _package_, hapus _package_, update versi _package_, atau pindahkan dari _dependencies_ ke _dev dependencies_ atau sebaliknya.

Aplikasi ini juga dapat secara otomatis memberikan _tag_ pada projectmu, contohnya seperti di atas ketika aku import akan otomatis terdapat _tag **express**_. Sistem tagging ini masih belum sempurna karena developer dari aplikasi ini berencana untuk memungkinkan kita untuk menambah _tag_ secara manual.

Satu hal lagi yang ingin aku singgung adalah menu di atas dan lebih tepatnya fitur _generate an app_ (tombol _gear_ pojok kanan).

Kamu bisa membikin project baru dan memilih memakai library/framework yang sudah tersedia. Contohnya aku ingin bikin sebuah project baru dengan Vue.

Kita lalu bisa memilih nama project, lokasinya ingin taruh di mana dan pilih _package manager_. Tiap _boilerplate_ memiliki pilihan pengaturan yang berbeda-beda dan di atas hanyalah contoh untuk Vue.

Jika kamu mengalami kesulitan bisa lihat di [_issue page_](https://github.com/kitze/JSUI/issues) nya mungkin saja ada yang mengalami hal yang sama dan harap maklum aplikasi ini masih baru jadi tentu belum sempurna.

Aplikasi ini sendiri dibikin menggunakan React dan [Electron](https://electronjs.org/) jadi jika kamu sendiri ingin coba membantu memperbaikinya langsung saja bikin [_Pull Request_](https://github.com/kitze/JSUI/pulls) nya.

Terakhir, jika kamu ingin memantau aktifitas perkembangan aplikasi ini bisa pantau di twitter sang pembuat aplikasi tersebut: [https://twitter.com/thekitze](https://twitter.com/thekitze)

declare module '*.jpg' {
  const urlOrBase64: string;
  export default urlOrBase64;
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

<script>
export default {
  props: {
    renderFunc: {
      type: String,
      required: true
    },
    staticRenderFuncs: {
      type: String,
      required: true
    }
  },
  data: () => ({
    templateRender: null
  }),
  created() {
    this.templateRender = new Function(this.renderFunc)();
    this.$options.staticRenderFns = new Function(this.staticRenderFuncs)();
  },
  render(h) {
    return this.templateRender ? this.templateRender() : h('div', 'loading');
  }
};
</script>

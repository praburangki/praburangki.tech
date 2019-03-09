<script>
import PostImg from '~/components/blogs/PostImg';

export default {
  components: {
    PostImg,
  },
  props: {
    renderFunc: {
      type: String,
      required: true,
    },
    staticRenderFuncs: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    templateRender: null,
  }),
  created() {
    this.templateRender = new Function(this.renderFunc)();
    this.$options.staticRenderFns = new Function(this.staticRenderFuncs)();
  },
  render(h) {
    return this.templateRender ? this.templateRender() : h('div', 'loading');
  },
};
</script>

<style lang="scss" scoped>
@import '~/designs/components/blogPost.scss';
</style>

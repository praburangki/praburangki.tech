<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import PostImg from '~/components/blogs/PostImg.vue';
import CodeSnippet from '~/components/blogs/CodeSnippet.vue';

@Component({
  components: {
    PostImg,
    CodeSnippet,
  },
})
export default class DynamicMarkdown extends Vue {
  @Prop({ required: true }) renderFunc: string;
  @Prop({ required: true }) staticRenderFuncs: string;

  templateRender = null;

  created() {
    this.templateRender = new Function(this.renderFunc)();
    this.$options.staticRenderFns = new Function(this.staticRenderFuncs)();
  }
  render(h) {
    return this.templateRender ? this.templateRender() : h('div', 'loading');
  }
}
</script>

<style lang="scss" scoped>
@import '~/designs/components/blogPost.scss';
</style>

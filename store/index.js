import postLists from '~/lib/blogPosts';

export const state = () => ({
  posts: postLists.map(({ slug, attributes, vue }) => ({
    slug: slug,
    title: attributes.title,
    renderFunc: vue.render,
    staticRenderFuncs: vue.staticRenderFns
  }))
});

export const getters = {
  getPost: state => slug => state.posts.find(post => post.slug === slug)
};

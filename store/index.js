const postLists = [];

const importAll = (resolve, lang) => {
  resolve.keys().forEach(key => {
    const [, name] = key.match(/\/(.+)\.md$/);
    postLists.push({
      slug: name,
      ...resolve(key)
    });
  });
};

importAll(require.context('~/blogPosts/posts', true, /\.md$/));

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

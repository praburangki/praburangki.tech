const postLists = [];

const importAll = resolve => {
  resolve.keys().forEach(key => {
    const [, name] = key.match(/\/(.+)\.md$/);
    postLists.push({
      slug: name,
      ...resolve(key)
    });
  });
};
importAll(require.context('~/blogPosts/posts', true, /\.md$/));

export default postLists;

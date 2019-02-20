import { formatDate } from './formatDate';

const blogPosts = {
  items: [],
  attributes: []
};

const importAll = resolve => {
  resolve.keys().forEach(key => {
    const [, name] = key.match(/\/(.+)\.md$/);
    const { attributes, vue } = resolve(key);

    const publishedAt = formatDate(attributes.publishedAt);

    blogPosts.items.unshift({
      slug: name,
      ...attributes,
      publishedAt,
      publishedTime: new Date(attributes.publishedAt),
      renderFunc: vue.render,
      staticRenderFuncs: vue.staticRenderFns
    });

    blogPosts.attributes.unshift({
      slug: name,
      ...attributes,
      publishedAt
    });
  });
};
importAll(require.context('~/blogPosts/posts', true, /\.md$/));

export default blogPosts;

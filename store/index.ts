import blogPosts from '~/lib/blogPosts';

export const state = () => ({
  posts: blogPosts.items,
  postAttributes: blogPosts.attributes,
});

export const getters = {
  getPost: state => slug => state.posts.find(post => post.slug === slug),
  latestPosts: state => state.postAttributes.slice(0, 4),
};

export const generateMeta = (hid, content, property = 'name') => ({
  hid,
  [property]: hid,
  content,
});

const defaultMeta = {
  title: 'Personal Site - Prabu Rangki',
  description: 'Personal website of Prabu Rangki',
  baseUrl: 'https://praburangki.tech',
};

export default [
  generateMeta('title', defaultMeta.title),
  generateMeta('description', defaultMeta.description),
  generateMeta('og:title', defaultMeta.title, 'property'),
  generateMeta('og:description', defaultMeta.description, 'property'),
  generateMeta('og:type', 'website', 'property'),
  generateMeta('og:url', defaultMeta.baseUrl, 'property'),
  generateMeta('twitter:card', 'summary_large_image'),
  generateMeta('twitter:site', '@praburangki'),
  generateMeta('twitter:title', defaultMeta.title),
  generateMeta('twitter:description', defaultMeta.description),
  generateMeta('twitter:image:alt', 'praburangki profile'),
];

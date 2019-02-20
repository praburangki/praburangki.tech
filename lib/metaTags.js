const generateMeta = (hid, content, property = 'name') => ({
  hid,
  [property]: hid,
  content
});

const defaultMeta = {
  title: 'praburangki',
  description: 'Personal website of Prabu Rangki',
  baseUrl: 'https://praburangki.tech'
};

module.exports = [
  generateMeta('description', defaultMeta.description),
  generateMeta('og:title', defaultMeta.title, 'property'),
  generateMeta('og:description', defaultMeta.description, 'property'),
  generateMeta('og:type', 'website', 'property'),
  generateMeta('og:url', defaultMeta.baseUrl, 'property'),
  generateMeta('twitter:card', 'summary'),
  generateMeta('twitter:site', '@praburangki'),
  generateMeta('twitter:title', defaultMeta.title),
  generateMeta('twitter:description', defaultMeta.description),
  generateMeta('twitter:image:alt', 'praburangki profile')
];

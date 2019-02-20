const generateMeta = (hid, content) => ({ hid, name: hid, content });

const defaultMeta = {
  title: 'praburangki',
  description: 'Personal website of Prabu Rangki',
  baseUrl: 'https://praburangki.tech'
};

module.exports = [
  generateMeta('description', defaultMeta.description),
  generateMeta('og:title', defaultMeta.title),
  generateMeta('og:description', defaultMeta.description),
  generateMeta('og:type', 'website'),
  generateMeta('og:url', defaultMeta.baseUrl),
  generateMeta('twitter:card', 'summary'),
  generateMeta('twitter:site', '@praburangki'),
  generateMeta('twitter:title', defaultMeta.title),
  generateMeta('twitter:description', defaultMeta.description),
  generateMeta('twitter:image:alt', 'praburangki profile')
];

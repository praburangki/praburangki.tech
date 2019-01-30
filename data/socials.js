import { Github, Twitter, GMail, LinkedIn } from '~/components/Icons/Socials';

const generate = (id, link, icon) => ({ id, link, icon });

export default [
  generate('github', 'https://github.com/praburangki', Github),
  generate('twitter', 'https://twitter.com/praburangki', Twitter),
  generate('linkedin', 'https://linkedin.com/in/praburangki', LinkedIn),
  generate('gmail', 'mailto:praburangki@gmail.com', GMail)
];

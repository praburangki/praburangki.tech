import { Github, Twitter, GMail, LinkedIn } from '~/components/Icons/Socials';

const generate = (id, link, icon, ariaText) => ({ id, link, icon, ariaText });

export default [
  generate(
    'github',
    'https://github.com/praburangki',
    Github,
    'check me out on Github'
  ),
  generate(
    'twitter',
    'https://twitter.com/praburangki',
    Twitter,
    'Follow me on twitter'
  ),
  generate(
    'linkedin',
    'https://linkedin.com/in/praburangki',
    LinkedIn,
    "Let's connect on LinkedIn"
  ),
  generate('gmail', 'mailto:praburangki@gmail.com', GMail, 'Send me an email')
];

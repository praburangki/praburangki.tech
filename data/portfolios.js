const generateCard = (
  name,
  short,
  long,
  techStack,
  imageSrc,
  link,
  className,
  fullWidth = true
) => ({
  name,
  short,
  long,
  techStack,
  imageSrc,
  link,
  className,
  fullWidth
});

export default [
  generateCard(
    'Carriage',
    'Food Delivery Service',
    'Startup based in Kuwait that provides delivery services for multiple countries.',
    ['rails', 'js'],
    require('~/assets/images/portfolios/carriage.jpg'),
    'https://trycarriage.com/',
    'carriage',
    false
  ),
  generateCard(
    "Pond's Men",
    'Trivia Quiz',
    "Trivia Quiz for the FIFA World Cup 2018 to win prizes from Pond's Men",
    ['node', 'react', 'firebase'],
    require('~/assets/images/portfolios/ponds.jpg'),
    'https://triplelakimasakini.goal.com/',
    'ponds'
  ),
  generateCard(
    'Memotus',
    'Health Counseling',
    'Startup based in Sweden where people who have injuries can discuss and ask for help from the experts.',
    ['node', 'react'],
    require('~/assets/images/portfolios/memotus.jpg'),
    'https://memotus.se/',
    'memotus'
  ),
  generateCard(
    'Soundrenaline 2018',
    'Concert Schedule',
    'Unofficial website schedule for the Soundrenaline 2018.',
    ['pwa', 'vue', 'firebase'],
    require('~/assets/images/portfolios/soundrenaline.jpg'),
    'https://soundrenaline18.firebaseapp.com/',
    'soundrenaline'
  ),
  generateCard(
    'GDG Bali',
    'Community & Events',
    'Events for the Google Developer Group community in Bali.',
    ['rails', 'node', 'pwa', 'vue'],
    require('~/assets/images/portfolios/gdg.jpg'),
    'https://gdgbali.com/',
    'gdg'
  ),
  generateCard(
    'Arctic Imagination',
    'News and Catalogs',
    'An international library collaboration about the disappearing of the ice.',
    ['node', 'js'],
    require('~/assets/images/portfolios/arctic.jpg'),
    'http://www.arcticimagination.com/',
    'arctic'
  ),
  generateCard(
    'Nujeks',
    'Administration System',
    'Administration System for the Nusantara Jaya Ekspress logistics company.',
    ['rails', 'node', 'vue'],
    require('~/assets/images/portfolios/nujeks.jpg'),
    'https://nujeks.com',
    'nujeks'
  ),
  generateCard(
    'Magloft',
    'Digital Publishing',
    'Digital publishing solution for indies, magazine publishers, bloggers and more!',
    ['rails', 'js'],
    require('~/assets/images/portfolios/magloft.jpg'),
    'https://www.magloft.com/',
    'magloft'
  )
];

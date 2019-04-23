import RailsIcon from '~/components/Icons/Rails.vue';
import VueIcon from '~/components/Icons/Vue.vue';
import AngularIcon from '~/components/Icons/Angular.vue';
import FirebaseIcon from '~/components/Icons/Firebase.vue';
import JavascriptIcon from '~/components/Icons/Javascript.vue';
import NodeIcon from '~/components/Icons/Node.vue';
import PwaIcon from '~/components/Icons/Pwa.vue';
import ReactIcon from '~/components/Icons/React.vue';
import TypescriptIcon from '~/components/Icons/Typescript.vue';

const createIcon = (name, component) => ({
  name,
  component,
});

export default [
  createIcon('Progressive Web Apps', PwaIcon),
  createIcon('Ruby on Rails', RailsIcon),
  createIcon('NodeJS', NodeIcon),
  createIcon('VueJS', VueIcon),
  createIcon('ReactJS', ReactIcon),
  createIcon('Typescript', TypescriptIcon),
];

export const iconObj = {
  pwa: createIcon('Progressive Web Apps', PwaIcon),
  rails: createIcon('Ruby on Rails', RailsIcon),
  firebase: createIcon('Firebase', FirebaseIcon),
  vue: createIcon('VueJS', VueIcon),
  react: createIcon('ReactJS', ReactIcon),
  node: createIcon('NodeJS', NodeIcon),
  js: createIcon('Javascript', JavascriptIcon),
  angular: createIcon('Angular', AngularIcon),
};

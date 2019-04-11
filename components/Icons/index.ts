import RailsIcon from '~/components/Icons/Rails.vue';
import VueIcon from '~/components/Icons/Vue.vue';
import AngularIcon from '~/components/Icons/Angular.vue';
import CssIcon from '~/components/Icons/Css.vue';
import FirebaseIcon from '~/components/Icons/Firebase.vue';
import HtmlIcon from '~/components/Icons/Html.vue';
import JavascriptIcon from '~/components/Icons/Javascript.vue';
import NodeIcon from '~/components/Icons/Node.vue';
import PwaIcon from '~/components/Icons/Pwa.vue';
import ReactIcon from '~/components/Icons/React.vue';
import RubyIcon from '~/components/Icons/Ruby.vue';
import TypescriptIcon from '~/components/Icons/Typescript.vue';

const createIcon = (name, component) => ({
  name,
  component,
});

export default [
  createIcon('Progressive Web Apps', PwaIcon),
  createIcon('Ruby', RubyIcon),
  createIcon('HTML', HtmlIcon),
  createIcon('CSS', CssIcon),
  createIcon('Javascript', JavascriptIcon),
  createIcon('Ruby on Rails', RailsIcon),
  createIcon('NodeJS', NodeIcon),
  createIcon('VueJS', VueIcon),
  createIcon('ReactJS', ReactIcon),
  createIcon('Angular', AngularIcon),
  createIcon('Firebase', FirebaseIcon),
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

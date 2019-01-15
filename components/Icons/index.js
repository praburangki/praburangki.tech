import RailsIcon from '~/components/Icons/Rails';
import VueIcon from '~/components/Icons/Vue';
import AngularIcon from '~/components/Icons/Angular';
import CssIcon from '~/components/Icons/Css';
import FirebaseIcon from '~/components/Icons/Firebase';
import HtmlIcon from '~/components/Icons/Html';
import JavascriptIcon from '~/components/Icons/Javascript';
import NodeIcon from '~/components/Icons/Node';
import PwaIcon from '~/components/Icons/Pwa';
import ReactIcon from '~/components/Icons/React';
import RubyIcon from '~/components/Icons/Ruby';
import TypescriptIcon from '~/components/Icons/Typescript';

const createIcon = (name, component) => ({
  name,
  component
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
  createIcon('Typescript', TypescriptIcon)
];

export const iconObj = {
  pwa: createIcon('Progressive Web Apps', PwaIcon),
  rails: createIcon('Ruby on Rails', RailsIcon),
  firebase: createIcon('Firebase', FirebaseIcon),
  vue: createIcon('VueJS', VueIcon),
  react: createIcon('ReactJS', ReactIcon),
  node: createIcon('NodeJS', NodeIcon),
  js: createIcon('Javascript', JavascriptIcon),
  angular: createIcon('Angular', AngularIcon)
};

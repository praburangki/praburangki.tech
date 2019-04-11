import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class CommonMixin extends Vue {
  navIsVisible;

  get navVisibleClass() {
    return { navIsVisible: this.navIsVisible };
  }
}

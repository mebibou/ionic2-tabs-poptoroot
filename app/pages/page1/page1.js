import {Page, NavController} from 'ionic-framework/ionic';
import {ChildPage} from './child';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  constructor(private nav: NavController) {
  }

  child() {
    this.nav.push(ChildPage);
  }
}

import {Page, NavController} from 'ionic-angular';
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

import {Page, NavController} from 'ionic-framework/ionic';
import {HomePage} from '../home/home';

@Page({
  templateUrl: 'build/pages/page1/child.html'
})
export class ChildPage {
  constructor(private nav: NavController) {
  }

  method1() {
    this.nav.setRoot(HomePage);
    this.nav.push(HomePage);
  }

  method2() {
    this.nav.setRoot(HomePage);
  }

  method3() {
    this.nav.popToRoot();
  }
}

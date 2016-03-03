
import {Page, NavController} from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(private nav: NavController) {
  }

  tabs() {
    this.nav.push(TabsPage);
  }
}

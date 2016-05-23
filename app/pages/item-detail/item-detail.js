import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/item-detail/item-detail.html',
})
export class ItemDetailPage {
  static get parameters() {
    return [[NavController],[NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
    this.navParams = navParams;

    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }
}

import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/add-item/add-item.html',
})

export class AddItemPage {

  static get parameters(){
    return [[NavController],[NavParams]];
  }

  constructor(nav, navParams) {

    this.nav = nav;
    this.navParams = navParams;

    this.title = "";
    this.description = "";
  }

  saveItem(){

    let newItem = {
      title: this.title,
      description: this.description
    };

    this.navParams.get('homePage').saveItem(newItem);
    this.nav.pop();

  }

}
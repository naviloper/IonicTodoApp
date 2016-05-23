import {Page, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  static get parameters(){
    return [[NavController]]
  }

  constructor(nav) {
    this.nav = nav;

    this.items = [];
  }

  addItem(){
    this.nav.push(AddItemPage, {homePage: this});
  }

  saveItem(item){
    this.items.push(item);
  }

  viewItem(item){
    console.log(item);
    this.nav.push(ItemDetailPage, {item: item});
  }
}

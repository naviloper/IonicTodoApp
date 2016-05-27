import {Page, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {Data} from '../../providers/data/data';
import {NgZone} from '@angular/core';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  static get parameters(){
    return [[NavController], [Data], [NgZone]]
  }

  constructor(nav, dataService, zone) {
    this.nav = nav;
    this.dataService = dataService;
    this.zone = zone;
    this.items = [];

    this.dataService.getData().then((todos) => {

      if(todos){
      this.zone.run(() => {
        this.items = JSON.parse(todos);
        });
      }

    });

  }

  addItem(){
    this.nav.push(AddItemPage, {homePage: this});
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.nav.push(ItemDetailPage, {item: item});
  }
}
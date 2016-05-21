import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  static get parameters(){
    return [[NavController]]
  }

  constructor(nav) {
    this.nav = nav;

    this.items = [
      {title: 'hi1', description: 'test1'},
      {title: 'hi2', description: 'test2'},
      {title: 'hi3', description: 'test3'},
    ];
  }

  addItem(){

  }

  viewItem(){

  }
}

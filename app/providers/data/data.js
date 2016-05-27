import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class Data {
  constructor(){
    this.storage = new Storage(SqlStorage, {name:'todo'});
    this.data = null;
  }

  getData() {
    return this.storage.get('todos');
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }
}
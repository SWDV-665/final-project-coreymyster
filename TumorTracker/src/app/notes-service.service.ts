import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private storage: Storage) {}

  items = []

  loadSaved() {
    this.storage.get('items').then((items) => {
      this.items = items || [];
    });
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(item) {
    this.items.push(item);
    this.storage.set('items', this.items);
  }

  editItem(item, index) {
    this.items[index]= item;
  }
}

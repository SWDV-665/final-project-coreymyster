import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items: any;

  constructor() {
    this.items = [
      'This is the first note.',
      'This is the second note'
    ];

  }

}

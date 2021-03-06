import { Component } from '@angular/core';
import {PhotoProvider} from '../photo-provider.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public photoService: PhotoProvider) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }
}

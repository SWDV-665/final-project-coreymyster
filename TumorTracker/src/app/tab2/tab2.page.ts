import { Component } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  clicks = []

  loadClicks() {
    console.log("Load clicks called");

    let clickLocations = this.clicks.map(location => {
      return document.getElementById("test").innerHTML += `<img class="dot" style="width:5%; top:${location[0]}px; left: ${location[1]}px; position: absolute;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1024px-Location_dot_black.svg.png"/>`;
    })
  }

  addSpot(e) {

    // This output's the X coord of the click
    console.log(e.clientY);
    let xAdjust = e.clientY - 50;

    // This output's the Y coord of the click
    console.log(e.clientX);
    let yAdjust = e.clientX - 50;
    this.clicks.push([yAdjust, xAdjust]);
    console.log(this.clicks);

    this.loadClicks()

  }

}

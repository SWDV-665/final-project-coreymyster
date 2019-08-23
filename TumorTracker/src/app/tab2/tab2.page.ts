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

  // Loads the array containing locations where the screen was tapped.
  loadClicks() {
    console.log("Load clicks called");

    let clickLocations = this.clicks.map(location => {
      return document.getElementById("test").innerHTML += `<img class="dot" style="width:5%; top:${location[0]}px; left: ${location[1]}px; position: absolute;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1024px-Location_dot_black.svg.png"/>`;
    })
  }

  // Gets the coordinate where someone taps the screen and saves the X and Y
  // values in an array as an array
  addSpot(e) {

    console.log(e.clientY);
    let yAdjust = e.clientY - 90;

    console.log(e.clientX);
    let xAdjust = e.clientX - 27;
    this.clicks.push([yAdjust, xAdjust]);
    console.log(this.clicks);

    this.loadClicks()

  }

}

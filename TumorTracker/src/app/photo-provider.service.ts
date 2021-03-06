import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

class Photo {
  data: any;
}

@Injectable()
export class PhotoProvider {

  public photos: Photo[] = [];

  constructor(private camera: Camera, private storage: Storage, private photoViewer: PhotoViewer) {}

  // When app loads this loads any photos saved on the device storage.
  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

  viewPhoto(photo) {
    var options = {
    share: true, // default is false
    closeButton: false, // default is true
    copyToReference: true, // default is false
    headers: '',  // If this is not provided, an exception will be triggered
    piccasoOptions: { } // If this is not provided, an exception will be triggered
    };

    this.photoViewer.show(photo);
    console.log("Photo tapped")
  }

  //Takes the picture and then saves the data in the array.
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });

      // Save all photos for later viewing
      this.storage.set('photos', this.photos);
    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });
  }

}

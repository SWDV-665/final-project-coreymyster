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

  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

  viewPhoto(photo) {
    this.photoViewer.show(photo);
    console.log("Photo tapped")
  }

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

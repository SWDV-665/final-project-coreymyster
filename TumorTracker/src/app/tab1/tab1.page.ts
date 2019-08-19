import { Component } from '@angular/core';
import { InputDialogServiceService } from '../input-dialog-service.service';
import { NotesServiceService } from '../notes-service.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items: any;

  constructor(public inputDialogService:InputDialogServiceService, public toastController: ToastController, public alertController: AlertController, public dataService:NotesServiceService, public socialSharing: SocialSharing) {
    /*this.items = [
      'This is the first note.',
      'This is the second note'
    ];*/
    }

    loadItems() {
  return this.dataService.getItems();
}

  async removeItem(item, index) {
    const toast = await this.toastController.create({
      message: `Removing ${item.name}, ${index}`,
      duration: 2000
    });
    toast.present();
    this.dataService.removeItem(index);
  }

  async shareItem(item, index) {
    const toast = await this.toastController.create({
      message: `Sharing ${item.name}, ${index}`,
      duration: 2000
    });
    toast.present();

    let message = `Grocery item - Name: ${item.name} - Quantity: ${item.quantity}`;
    let subject = `Shared via groceries app`;
        // Check if sharing via email is supported
    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared succesfully")
    }).catch((error) => {
      // Sharing via email is not possible
      console.log(`Error while sharing`, error)
    });
  }

  async editItem(item, index) {
    const toast = await this.toastController.create({
      message: `Editing ${item.name}, ${index}`,
      duration: 2000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }

}

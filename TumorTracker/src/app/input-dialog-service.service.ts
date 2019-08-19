import { Injectable } from '@angular/core';
import { NotesServiceService } from './notes-service.service';
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public alertController: AlertController, public dataService: NotesServiceService) { }



  async showPrompt(item?, index?) {
    let today = new Date();

    const alert = await this.alertController.create({
      header: item ? 'Add Note' : 'Add Note',
      message: item ? 'Enter details about your pet' : 'Enter details about your pet...',
      inputs: [
        {
          name: 'note',
          type: 'text',
          placeholder: 'Enter Note',
          value: item ? item.note : null
        },
        {
          name: 'date',
          type: 'date',
          placeholder: 'Enter Date',
          value: item ? item.date : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Save Clicked', item);
            if (index != undefined) {
              this.dataService.editItem(item, index);
            } else {
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}

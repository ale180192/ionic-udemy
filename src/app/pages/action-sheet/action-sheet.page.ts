import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( public actionSheetController: ActionSheetController ) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Track',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('click on delete track')
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('click on share');
          }
        },
        {
          text: 'Play',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('click on play')
          }
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('click on favorite')
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

}

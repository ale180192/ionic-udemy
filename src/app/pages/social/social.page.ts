import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {

  constructor(private socialSharing: SocialSharing ) {
    console.log('call construct social ');
  }

  ngOnInit() {

  }


  share() {
    this.socialSharing.shareViaWhatsApp('msg' , 'image' , 'google.com' ).then(() => {
      console.log('ok shared');
    }).catch((err) => {
      console.log('error', err);
    });
  }

}

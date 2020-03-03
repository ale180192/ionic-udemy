import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SocialPageRoutingModule } from './social-routing.module';
import { SocialPage } from './social.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialPageRoutingModule
  ],
  declarations: [SocialPage],
  providers: [SocialSharing]
})
export class SocialPageModule {}

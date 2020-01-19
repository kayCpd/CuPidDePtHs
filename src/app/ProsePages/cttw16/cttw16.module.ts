import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cttw16PageRoutingModule } from './cttw16-routing.module';

import { Cttw16Page } from './cttw16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cttw16PageRoutingModule
  ],
  declarations: [Cttw16Page]
})
export class Cttw16PageModule {}

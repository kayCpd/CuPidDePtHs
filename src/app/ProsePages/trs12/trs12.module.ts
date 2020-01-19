import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Trs12PageRoutingModule } from './trs12-routing.module';

import { Trs12Page } from './trs12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Trs12PageRoutingModule
  ],
  declarations: [Trs12Page]
})
export class Trs12PageModule {}

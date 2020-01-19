import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tssl2PageRoutingModule } from './tssl2-routing.module';

import { Tssl2Page } from './tssl2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tssl2PageRoutingModule
  ],
  declarations: [Tssl2Page]
})
export class Tssl2PageModule {}

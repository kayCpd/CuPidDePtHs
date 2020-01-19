import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abcog20PageRoutingModule } from './abcog20-routing.module';

import { Abcog20Page } from './abcog20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abcog20PageRoutingModule
  ],
  declarations: [Abcog20Page]
})
export class Abcog20PageModule {}

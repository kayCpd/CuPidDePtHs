import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mt4PageRoutingModule } from './mt4-routing.module';

import { Mt4Page } from './mt4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mt4PageRoutingModule
  ],
  declarations: [Mt4Page]
})
export class Mt4PageModule {}

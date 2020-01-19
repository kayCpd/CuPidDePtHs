import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adoj36PageRoutingModule } from './adoj36-routing.module';

import { Adoj36Page } from './adoj36.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adoj36PageRoutingModule
  ],
  declarations: [Adoj36Page]
})
export class Adoj36PageModule {}

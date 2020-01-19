import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pm17PageRoutingModule } from './pm17-routing.module';

import { Pm17Page } from './pm17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pm17PageRoutingModule
  ],
  declarations: [Pm17Page]
})
export class Pm17PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mtmp48PageRoutingModule } from './mtmp48-routing.module';

import { Mtmp48Page } from './mtmp48.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mtmp48PageRoutingModule
  ],
  declarations: [Mtmp48Page]
})
export class Mtmp48PageModule {}

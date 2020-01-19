import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mm8PageRoutingModule } from './mm8-routing.module';

import { Mm8Page } from './mm8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mm8PageRoutingModule
  ],
  declarations: [Mm8Page]
})
export class Mm8PageModule {}

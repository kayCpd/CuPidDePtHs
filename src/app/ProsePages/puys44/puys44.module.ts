import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Puys44PageRoutingModule } from './puys44-routing.module';

import { Puys44Page } from './puys44.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Puys44PageRoutingModule
  ],
  declarations: [Puys44Page]
})
export class Puys44PageModule {}

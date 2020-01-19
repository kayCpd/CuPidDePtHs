import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tptw50PageRoutingModule } from './tptw50-routing.module';

import { Tptw50Page } from './tptw50.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tptw50PageRoutingModule
  ],
  declarations: [Tptw50Page]
})
export class Tptw50PageModule {}

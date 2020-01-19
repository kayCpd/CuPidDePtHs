import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ts39PageRoutingModule } from './ts39-routing.module';

import { Ts39Page } from './ts39.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ts39PageRoutingModule
  ],
  declarations: [Ts39Page]
})
export class Ts39PageModule {}

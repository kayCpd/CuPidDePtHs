import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hgb33PageRoutingModule } from './hgb33-routing.module';

import { Hgb33Page } from './hgb33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hgb33PageRoutingModule
  ],
  declarations: [Hgb33Page]
})
export class Hgb33PageModule {}

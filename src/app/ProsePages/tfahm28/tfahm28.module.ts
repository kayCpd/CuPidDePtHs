import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tfahm28PageRoutingModule } from './tfahm28-routing.module';

import { Tfahm28Page } from './tfahm28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tfahm28PageRoutingModule
  ],
  declarations: [Tfahm28Page]
})
export class Tfahm28PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyMantraPageRoutingModule } from './daily-mantra-routing.module';

import { DailyMantraPage } from './daily-mantra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyMantraPageRoutingModule
  ],
  declarations: [DailyMantraPage]
})
export class DailyMantraPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tsmop6PageRoutingModule } from './tsmop6-routing.module';

import { Tsmop6Page } from './tsmop6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tsmop6PageRoutingModule
  ],
  declarations: [Tsmop6Page]
})
export class Tsmop6PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tpod37PageRoutingModule } from './tpod37-routing.module';

import { Tpod37Page } from './tpod37.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tpod37PageRoutingModule
  ],
  declarations: [Tpod37Page]
})
export class Tpod37PageModule {}

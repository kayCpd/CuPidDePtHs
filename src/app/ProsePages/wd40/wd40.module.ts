import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Wd40PageRoutingModule } from './wd40-routing.module';

import { Wd40Page } from './wd40.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Wd40PageRoutingModule
  ],
  declarations: [Wd40Page]
})
export class Wd40PageModule {}

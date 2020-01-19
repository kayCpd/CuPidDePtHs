import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Wld32PageRoutingModule } from './wld32-routing.module';

import { Wld32Page } from './wld32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Wld32PageRoutingModule
  ],
  declarations: [Wld32Page]
})
export class Wld32PageModule {}

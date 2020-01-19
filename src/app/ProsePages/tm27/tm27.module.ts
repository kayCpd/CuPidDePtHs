import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tm27PageRoutingModule } from './tm27-routing.module';

import { Tm27Page } from './tm27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tm27PageRoutingModule
  ],
  declarations: [Tm27Page]
})
export class Tm27PageModule {}

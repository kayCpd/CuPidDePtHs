import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jgs35PageRoutingModule } from './jgs35-routing.module';

import { Jgs35Page } from './jgs35.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jgs35PageRoutingModule
  ],
  declarations: [Jgs35Page]
})
export class Jgs35PageModule {}

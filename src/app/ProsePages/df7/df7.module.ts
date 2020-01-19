import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Df7PageRoutingModule } from './df7-routing.module';

import { Df7Page } from './df7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Df7PageRoutingModule
  ],
  declarations: [Df7Page]
})
export class Df7PageModule {}

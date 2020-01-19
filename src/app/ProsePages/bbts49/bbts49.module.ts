import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bbts49PageRoutingModule } from './bbts49-routing.module';

import { Bbts49Page } from './bbts49.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bbts49PageRoutingModule
  ],
  declarations: [Bbts49Page]
})
export class Bbts49PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Et45PageRoutingModule } from './et45-routing.module';

import { Et45Page } from './et45.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Et45PageRoutingModule
  ],
  declarations: [Et45Page]
})
export class Et45PageModule {}

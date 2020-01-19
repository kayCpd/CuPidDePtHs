import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Azd11PageRoutingModule } from './azd11-routing.module';

import { Azd11Page } from './azd11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Azd11PageRoutingModule
  ],
  declarations: [Azd11Page]
})
export class Azd11PageModule {}

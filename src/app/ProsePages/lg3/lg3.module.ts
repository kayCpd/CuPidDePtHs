import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lg3PageRoutingModule } from './lg3-routing.module';

import { Lg3Page } from './lg3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lg3PageRoutingModule
  ],
  declarations: [Lg3Page]
})
export class Lg3PageModule {}

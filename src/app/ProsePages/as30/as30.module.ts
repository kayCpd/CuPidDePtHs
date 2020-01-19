import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { As30PageRoutingModule } from './as30-routing.module';

import { As30Page } from './as30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    As30PageRoutingModule
  ],
  declarations: [As30Page]
})
export class As30PageModule {}

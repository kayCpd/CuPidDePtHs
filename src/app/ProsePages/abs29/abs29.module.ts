import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abs29PageRoutingModule } from './abs29-routing.module';

import { Abs29Page } from './abs29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abs29PageRoutingModule
  ],
  declarations: [Abs29Page]
})
export class Abs29PageModule {}

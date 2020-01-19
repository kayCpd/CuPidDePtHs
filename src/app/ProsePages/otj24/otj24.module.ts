import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otj24PageRoutingModule } from './otj24-routing.module';

import { Otj24Page } from './otj24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otj24PageRoutingModule
  ],
  declarations: [Otj24Page]
})
export class Otj24PageModule {}

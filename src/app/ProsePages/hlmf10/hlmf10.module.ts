import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hlmf10PageRoutingModule } from './hlmf10-routing.module';

import { Hlmf10Page } from './hlmf10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hlmf10PageRoutingModule
  ],
  declarations: [Hlmf10Page]
})
export class Hlmf10PageModule {}

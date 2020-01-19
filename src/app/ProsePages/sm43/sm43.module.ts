import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sm43PageRoutingModule } from './sm43-routing.module';

import { Sm43Page } from './sm43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sm43PageRoutingModule
  ],
  declarations: [Sm43Page]
})
export class Sm43PageModule {}

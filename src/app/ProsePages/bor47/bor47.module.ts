import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bor47PageRoutingModule } from './bor47-routing.module';

import { Bor47Page } from './bor47.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bor47PageRoutingModule
  ],
  declarations: [Bor47Page]
})
export class Bor47PageModule {}

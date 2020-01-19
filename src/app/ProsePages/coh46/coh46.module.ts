import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coh46PageRoutingModule } from './coh46-routing.module';

import { Coh46Page } from './coh46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coh46PageRoutingModule
  ],
  declarations: [Coh46Page]
})
export class Coh46PageModule {}

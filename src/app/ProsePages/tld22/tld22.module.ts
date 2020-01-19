import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tld22PageRoutingModule } from './tld22-routing.module';

import { Tld22Page } from './tld22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tld22PageRoutingModule
  ],
  declarations: [Tld22Page]
})
export class Tld22PageModule {}

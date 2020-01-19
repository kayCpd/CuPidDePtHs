import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tr38PageRoutingModule } from './tr38-routing.module';

import { Tr38Page } from './tr38.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tr38PageRoutingModule
  ],
  declarations: [Tr38Page]
})
export class Tr38PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mll31PageRoutingModule } from './mll31-routing.module';

import { Mll31Page } from './mll31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mll31PageRoutingModule
  ],
  declarations: [Mll31Page]
})
export class Mll31PageModule {}

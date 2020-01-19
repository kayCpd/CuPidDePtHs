import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dmol23PageRoutingModule } from './dmol23-routing.module';

import { Dmol23Page } from './dmol23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dmol23PageRoutingModule
  ],
  declarations: [Dmol23Page]
})
export class Dmol23PageModule {}

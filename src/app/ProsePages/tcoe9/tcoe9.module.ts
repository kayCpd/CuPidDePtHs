import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tcoe9PageRoutingModule } from './tcoe9-routing.module';

import { Tcoe9Page } from './tcoe9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tcoe9PageRoutingModule
  ],
  declarations: [Tcoe9Page]
})
export class Tcoe9PageModule {}

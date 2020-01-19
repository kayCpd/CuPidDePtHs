import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rol41PageRoutingModule } from './rol41-routing.module';

import { Rol41Page } from './rol41.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rol41PageRoutingModule
  ],
  declarations: [Rol41Page]
})
export class Rol41PageModule {}

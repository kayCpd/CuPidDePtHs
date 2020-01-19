import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskmePageRoutingModule } from './askme-routing.module';

import { AskmePage } from './askme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AskmePageRoutingModule
  ],
  declarations: [AskmePage]
})
export class AskmePageModule {}

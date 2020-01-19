import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Or42PageRoutingModule } from './or42-routing.module';

import { Or42Page } from './or42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Or42PageRoutingModule
  ],
  declarations: [Or42Page]
})
export class Or42PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Wy19PageRoutingModule } from './wy19-routing.module';

import { Wy19Page } from './wy19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Wy19PageRoutingModule
  ],
  declarations: [Wy19Page]
})
export class Wy19PageModule {}

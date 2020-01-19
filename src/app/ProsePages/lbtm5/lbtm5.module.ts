import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lbtm5PageRoutingModule } from './lbtm5-routing.module';

import { Lbtm5Page } from './lbtm5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lbtm5PageRoutingModule
  ],
  declarations: [Lbtm5Page]
})
export class Lbtm5PageModule {}

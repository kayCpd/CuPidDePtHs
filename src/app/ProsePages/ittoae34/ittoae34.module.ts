import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ittoae34PageRoutingModule } from './ittoae34-routing.module';

import { Ittoae34Page } from './ittoae34.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ittoae34PageRoutingModule
  ],
  declarations: [Ittoae34Page]
})
export class Ittoae34PageModule {}

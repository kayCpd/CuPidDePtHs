import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aokol14PageRoutingModule } from './aokol14-routing.module';

import { Aokol14Page } from './aokol14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aokol14PageRoutingModule
  ],
  declarations: [Aokol14Page]
})
export class Aokol14PageModule {}

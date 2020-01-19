import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cc26PageRoutingModule } from './cc26-routing.module';

import { Cc26Page } from './cc26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cc26PageRoutingModule
  ],
  declarations: [Cc26Page]
})
export class Cc26PageModule {}

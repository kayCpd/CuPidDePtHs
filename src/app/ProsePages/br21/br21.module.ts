import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Br21PageRoutingModule } from './br21-routing.module';

import { Br21Page } from './br21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Br21PageRoutingModule
  ],
  declarations: [Br21Page]
})
export class Br21PageModule {}

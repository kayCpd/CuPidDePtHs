import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Err18PageRoutingModule } from './err18-routing.module';

import { Err18Page } from './err18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Err18PageRoutingModule
  ],
  declarations: [Err18Page]
})
export class Err18PageModule {}

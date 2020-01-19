import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Wdog25PageRoutingModule } from './wdog25-routing.module';

import { Wdog25Page } from './wdog25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Wdog25PageRoutingModule
  ],
  declarations: [Wdog25Page]
})
export class Wdog25PageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tssl2Page } from './tssl2.page';

const routes: Routes = [
  {
    path: '',
    component: Tssl2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tssl2PageRoutingModule {}

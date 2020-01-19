import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Trs12Page } from './trs12.page';

const routes: Routes = [
  {
    path: '',
    component: Trs12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Trs12PageRoutingModule {}

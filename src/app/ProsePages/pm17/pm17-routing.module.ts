import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pm17Page } from './pm17.page';

const routes: Routes = [
  {
    path: '',
    component: Pm17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pm17PageRoutingModule {}

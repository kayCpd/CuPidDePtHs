import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mtmp48Page } from './mtmp48.page';

const routes: Routes = [
  {
    path: '',
    component: Mtmp48Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mtmp48PageRoutingModule {}

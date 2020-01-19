import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gat13Page } from './gat13.page';

const routes: Routes = [
  {
    path: '',
    component: Gat13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gat13PageRoutingModule {}

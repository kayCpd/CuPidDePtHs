import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mm8Page } from './mm8.page';

const routes: Routes = [
  {
    path: '',
    component: Mm8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mm8PageRoutingModule {}

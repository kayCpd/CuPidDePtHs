import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tptw50Page } from './tptw50.page';

const routes: Routes = [
  {
    path: '',
    component: Tptw50Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tptw50PageRoutingModule {}

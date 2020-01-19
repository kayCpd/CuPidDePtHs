import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ts39Page } from './ts39.page';

const routes: Routes = [
  {
    path: '',
    component: Ts39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ts39PageRoutingModule {}

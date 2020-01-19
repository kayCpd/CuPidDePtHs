import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Wy19Page } from './wy19.page';

const routes: Routes = [
  {
    path: '',
    component: Wy19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Wy19PageRoutingModule {}

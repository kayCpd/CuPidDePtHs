import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Df7Page } from './df7.page';

const routes: Routes = [
  {
    path: '',
    component: Df7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Df7PageRoutingModule {}

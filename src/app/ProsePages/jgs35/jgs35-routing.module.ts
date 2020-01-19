import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jgs35Page } from './jgs35.page';

const routes: Routes = [
  {
    path: '',
    component: Jgs35Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jgs35PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tm27Page } from './tm27.page';

const routes: Routes = [
  {
    path: '',
    component: Tm27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tm27PageRoutingModule {}

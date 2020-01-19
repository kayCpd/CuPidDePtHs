import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tcoe9Page } from './tcoe9.page';

const routes: Routes = [
  {
    path: '',
    component: Tcoe9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tcoe9PageRoutingModule {}

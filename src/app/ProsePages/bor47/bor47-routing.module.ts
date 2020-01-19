import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bor47Page } from './bor47.page';

const routes: Routes = [
  {
    path: '',
    component: Bor47Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bor47PageRoutingModule {}

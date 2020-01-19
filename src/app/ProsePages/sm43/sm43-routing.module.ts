import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sm43Page } from './sm43.page';

const routes: Routes = [
  {
    path: '',
    component: Sm43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sm43PageRoutingModule {}

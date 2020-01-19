import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hgb33Page } from './hgb33.page';

const routes: Routes = [
  {
    path: '',
    component: Hgb33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hgb33PageRoutingModule {}

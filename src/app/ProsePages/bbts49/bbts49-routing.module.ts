import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bbts49Page } from './bbts49.page';

const routes: Routes = [
  {
    path: '',
    component: Bbts49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bbts49PageRoutingModule {}

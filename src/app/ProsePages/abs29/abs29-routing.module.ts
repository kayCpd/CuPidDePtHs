import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abs29Page } from './abs29.page';

const routes: Routes = [
  {
    path: '',
    component: Abs29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abs29PageRoutingModule {}

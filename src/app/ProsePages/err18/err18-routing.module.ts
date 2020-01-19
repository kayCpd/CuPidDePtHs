import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Err18Page } from './err18.page';

const routes: Routes = [
  {
    path: '',
    component: Err18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Err18PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lbtm5Page } from './lbtm5.page';

const routes: Routes = [
  {
    path: '',
    component: Lbtm5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lbtm5PageRoutingModule {}

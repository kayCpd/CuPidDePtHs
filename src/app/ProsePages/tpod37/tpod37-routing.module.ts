import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tpod37Page } from './tpod37.page';

const routes: Routes = [
  {
    path: '',
    component: Tpod37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tpod37PageRoutingModule {}

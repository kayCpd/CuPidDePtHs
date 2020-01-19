import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hlmf10Page } from './hlmf10.page';

const routes: Routes = [
  {
    path: '',
    component: Hlmf10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hlmf10PageRoutingModule {}

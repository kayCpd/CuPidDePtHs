import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Puys44Page } from './puys44.page';

const routes: Routes = [
  {
    path: '',
    component: Puys44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Puys44PageRoutingModule {}

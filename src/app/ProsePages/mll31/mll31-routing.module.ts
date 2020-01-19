import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mll31Page } from './mll31.page';

const routes: Routes = [
  {
    path: '',
    component: Mll31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mll31PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tld22Page } from './tld22.page';

const routes: Routes = [
  {
    path: '',
    component: Tld22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tld22PageRoutingModule {}

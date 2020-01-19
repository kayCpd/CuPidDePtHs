import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Wld32Page } from './wld32.page';

const routes: Routes = [
  {
    path: '',
    component: Wld32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Wld32PageRoutingModule {}

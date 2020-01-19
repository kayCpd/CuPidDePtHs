import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Br21Page } from './br21.page';

const routes: Routes = [
  {
    path: '',
    component: Br21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Br21PageRoutingModule {}

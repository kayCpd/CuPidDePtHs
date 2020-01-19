import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ittoae34Page } from './ittoae34.page';

const routes: Routes = [
  {
    path: '',
    component: Ittoae34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ittoae34PageRoutingModule {}

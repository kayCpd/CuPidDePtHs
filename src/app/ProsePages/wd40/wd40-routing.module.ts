import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Wd40Page } from './wd40.page';

const routes: Routes = [
  {
    path: '',
    component: Wd40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Wd40PageRoutingModule {}

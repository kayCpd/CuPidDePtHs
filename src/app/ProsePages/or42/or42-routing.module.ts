import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Or42Page } from './or42.page';

const routes: Routes = [
  {
    path: '',
    component: Or42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Or42PageRoutingModule {}

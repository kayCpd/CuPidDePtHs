import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rol41Page } from './rol41.page';

const routes: Routes = [
  {
    path: '',
    component: Rol41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rol41PageRoutingModule {}

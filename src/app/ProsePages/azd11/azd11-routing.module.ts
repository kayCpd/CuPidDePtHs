import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Azd11Page } from './azd11.page';

const routes: Routes = [
  {
    path: '',
    component: Azd11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Azd11PageRoutingModule {}

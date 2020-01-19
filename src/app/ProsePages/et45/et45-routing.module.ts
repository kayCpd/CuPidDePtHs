import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Et45Page } from './et45.page';

const routes: Routes = [
  {
    path: '',
    component: Et45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Et45PageRoutingModule {}

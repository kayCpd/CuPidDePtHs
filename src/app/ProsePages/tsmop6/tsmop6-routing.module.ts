import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tsmop6Page } from './tsmop6.page';

const routes: Routes = [
  {
    path: '',
    component: Tsmop6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tsmop6PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tr38Page } from './tr38.page';

const routes: Routes = [
  {
    path: '',
    component: Tr38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tr38PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adoj36Page } from './adoj36.page';

const routes: Routes = [
  {
    path: '',
    component: Adoj36Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adoj36PageRoutingModule {}

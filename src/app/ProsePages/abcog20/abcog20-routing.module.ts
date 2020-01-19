import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abcog20Page } from './abcog20.page';

const routes: Routes = [
  {
    path: '',
    component: Abcog20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abcog20PageRoutingModule {}

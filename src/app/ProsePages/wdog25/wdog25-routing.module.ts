import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Wdog25Page } from './wdog25.page';

const routes: Routes = [
  {
    path: '',
    component: Wdog25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Wdog25PageRoutingModule {}

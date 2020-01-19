import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { As30Page } from './as30.page';

const routes: Routes = [
  {
    path: '',
    component: As30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class As30PageRoutingModule {}

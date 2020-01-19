import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tfahm28Page } from './tfahm28.page';

const routes: Routes = [
  {
    path: '',
    component: Tfahm28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tfahm28PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coh46Page } from './coh46.page';

const routes: Routes = [
  {
    path: '',
    component: Coh46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coh46PageRoutingModule {}

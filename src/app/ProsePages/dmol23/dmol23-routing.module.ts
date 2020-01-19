import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dmol23Page } from './dmol23.page';

const routes: Routes = [
  {
    path: '',
    component: Dmol23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dmol23PageRoutingModule {}

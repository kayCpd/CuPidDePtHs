import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aokol14Page } from './aokol14.page';

const routes: Routes = [
  {
    path: '',
    component: Aokol14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aokol14PageRoutingModule {}

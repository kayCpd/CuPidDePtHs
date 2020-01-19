import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cc26Page } from './cc26.page';

const routes: Routes = [
  {
    path: '',
    component: Cc26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cc26PageRoutingModule {}

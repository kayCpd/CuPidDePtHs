import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mt4Page } from './mt4.page';

const routes: Routes = [
  {
    path: '',
    component: Mt4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mt4PageRoutingModule {}

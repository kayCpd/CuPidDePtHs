import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otj24Page } from './otj24.page';

const routes: Routes = [
  {
    path: '',
    component: Otj24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otj24PageRoutingModule {}

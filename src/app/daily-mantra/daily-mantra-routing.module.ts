import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyMantraPage } from './daily-mantra.page';

const routes: Routes = [
  {
    path: '',
    component: DailyMantraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyMantraPageRoutingModule {}

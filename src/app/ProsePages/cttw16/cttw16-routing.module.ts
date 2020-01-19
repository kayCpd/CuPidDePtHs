import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cttw16Page } from './cttw16.page';

const routes: Routes = [
  {
    path: '',
    component: Cttw16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cttw16PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsLieuPage } from './details-lieu.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsLieuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsLieuPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateLieuPage } from './update-lieu.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateLieuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateLieuPageRoutingModule {}

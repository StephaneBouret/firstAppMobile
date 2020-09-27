import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLieuPage } from './new-lieu.page';

const routes: Routes = [
  {
    path: '',
    component: NewLieuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLieuPageRoutingModule {}

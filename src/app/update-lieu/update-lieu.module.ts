import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateLieuPageRoutingModule } from './update-lieu-routing.module';

import { UpdateLieuPage } from './update-lieu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateLieuPageRoutingModule
  ],
  declarations: [UpdateLieuPage]
})
export class UpdateLieuPageModule {}

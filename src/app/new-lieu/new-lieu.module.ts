import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLieuPageRoutingModule } from './new-lieu-routing.module';

import { NewLieuPage } from './new-lieu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLieuPageRoutingModule
  ],
  declarations: [NewLieuPage]
})
export class NewLieuPageModule {}

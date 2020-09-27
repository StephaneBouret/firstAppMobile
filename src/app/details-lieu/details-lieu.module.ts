import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsLieuPageRoutingModule } from './details-lieu-routing.module';

import { DetailsLieuPage } from './details-lieu.page';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsLieuPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [DetailsLieuPage]
})
export class DetailsLieuPageModule {}

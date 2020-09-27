import { LieuxService } from './../services/lieux.service';
import { Component } from '@angular/core';
import { Lieu } from '../models/lieu.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lieux',
  templateUrl: './lieux.page.html',
  styleUrls: ['./lieux.page.scss'],
})
export class LieuxPage  {
  lieux: Array<Lieu>;

  constructor(
    private lieuxService: LieuxService,
    private navCtrl: NavController
    ) { }

  async ionViewWillEnter() {
    this.lieux = await this.lieuxService.getLieux();
    console.log(this.lieux);
  }

  goToDetailsLieu(lieu: Lieu) {
    this.lieuxService.setLieu(lieu);
    this.navCtrl.navigateForward('/details-lieu');
  }

}

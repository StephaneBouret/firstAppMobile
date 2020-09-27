import { Component, OnInit } from '@angular/core';
import { Lieu } from '../models/lieu.model';
import { LieuxService } from '../services/lieux.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-lieu',
  templateUrl: './update-lieu.page.html',
  styleUrls: ['./update-lieu.page.scss'],
})
export class UpdateLieuPage implements OnInit {
  lieuModif: Lieu;

  constructor(
    public lieuxService: LieuxService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.lieuModif = this.lieuxService.getSelectedLieu();
  }

  editLieu() {
    this.lieuxService.editLieu(this.lieuModif);
    this.navCtrl.navigateBack('/details-lieu');
  }

}

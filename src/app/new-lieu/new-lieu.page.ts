import { LieuxService } from './../services/lieux.service';
import { Component } from '@angular/core';
import { Lieu } from '../models/lieu.model';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

import { Vibration } from '@ionic-native/vibration/ngx';


@Component({
  selector: 'app-new-lieu',
  templateUrl: './new-lieu.page.html',
  styleUrls: ['./new-lieu.page.scss'],
})
export class NewLieuPage {

  constructor(
    private lieuxService: LieuxService,
    private navCtrl: NavController,
    public vibration: Vibration
    ) { }


  ajoutLieu(lieu: Lieu) {
    lieu.creatingDate = new Date().getTime();
    lieu.photo = [];
    lieu.location = { latitude: 0, longitude: 0 };
    Geolocation.getCurrentPosition().then(datas => {
      lieu.location.latitude = datas.coords.latitude;
      lieu.location.longitude = datas.coords.longitude;
      this.afterLocation(lieu);
    }).catch(err => {
      console.log(err);
      this.afterLocation(lieu);
    });
  }

  private afterLocation(lieu: Lieu) {
    this.lieuxService.addLieu(lieu);
    this.vibration.vibrate(500);
    this.navCtrl.navigateBack('/lieux');
  }

}

import { Component } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage {
  meteo: any;

  constructor(
    public meteoService: MeteoService,
    public loadingController: LoadingController
  ) { }

    async onGetMeteo(ville) {
      const loading = await this.loadingController.create({
        message: 'Demande en cours...'
      });
      loading.present().then(() => {
        this.meteoService.getMeteo(ville)
          .subscribe(data => {
            this.meteo = data;
            loading.dismiss();
          }, err => {
            loading.dismiss();
            console.log(err);
          });
      });
    }
}

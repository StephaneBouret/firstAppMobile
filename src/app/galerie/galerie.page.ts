import { Component } from '@angular/core';
import { GalerieService } from '../services/galerie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.page.html',
  styleUrls: ['./galerie.page.scss'],
})
export class GaleriePage  {
  searchTerm = '';
  resultImgs: any = { hits: [] };
  nbResults = 10;
  currentPage = 1;
  totalPages: number;

  constructor(
    private galerieService: GalerieService,
    private navCtrl: NavController
  ) { }


  search() {
    // this.resultImgs.hits = [];
    this.galerieService.searchPixabay(this.searchTerm, this.nbResults, this.currentPage)
      .subscribe((datas: any) => {
        this.totalPages = datas.totalHits / this.nbResults;
        if (datas.totalHits % this.nbResults !== 0) {
          ++this.totalPages;
        }

        datas.hits.forEach(element => {
          this.resultImgs.hits.push(element);
        });
        console.log(datas);
    }, err => console.log(err) );
  }

  loadData(event) {
    if (this.currentPage < this.totalPages) {
      setTimeout(() => {
        ++this.currentPage;
        this.search();
        event.target.complete();
      }, 500);
    } else {
      event.target.complete();
    }
  }

  clickImage(image: any) {
    this.galerieService.defineImage(image);
    this.navCtrl.navigateForward('/details-image');
  }

}

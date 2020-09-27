import { GalerieService } from './../services/galerie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-image',
  templateUrl: './details-image.page.html',
  styleUrls: ['./details-image.page.scss'],
})
export class DetailsImagePage implements OnInit {
  image: any;

  constructor(public galerieService: GalerieService) { }

  ngOnInit() {
    this.image = this.galerieService.getImage();
  }

}

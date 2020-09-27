import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  infos = {
    name: 'CEFii',
    tel: '+33241721978',
    mail: 'contact@cefii.fr',
    logo: './../../assets/imgs/Logo_CEFii.png'
  } ;

  constructor() {}

}

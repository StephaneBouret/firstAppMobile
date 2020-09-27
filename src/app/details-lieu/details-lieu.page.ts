import { Lieu } from './../models/lieu.model';
import { LieuxService } from './../services/lieux.service';
import { Component, OnInit } from '@angular/core';

import { Plugins, CameraResultType, CameraOptions, CameraSource } from '@capacitor/core';
import { AlertController, NavController } from '@ionic/angular';
const { Camera, Toast } = Plugins;

@Component({
  selector: 'app-details-lieu',
  templateUrl: './details-lieu.page.html',
  styleUrls: ['./details-lieu.page.scss'],
})
export class DetailsLieuPage implements OnInit {
  lieu: Lieu;
  zoom = 15;
  slideOpts = {
    effect: 'flip',
    speed: 500
  };

  constructor(
    private lieuxService: LieuxService,
    public alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.lieu = this.lieuxService.getSelectedLieu();
  }

  takePicture(opt: CameraOptions) {
    Camera.getPhoto(opt).then(datas => {
      const base64Img = 'data:image/jpeg;base64,' + datas.base64String;
      this.lieuxService.addPicture(base64Img, this.lieu.creatingDate);
    }).catch(err => console.log(err));
  }

  async ajouterImage() {
    const optionsCamera: CameraOptions = {
      quality: 80,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      saveToGallery: true,
      width: 500
    };

    const optionsGallery: CameraOptions = {
      quality: 80,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
      width: 500
    };

    const alert = await this.alertCtrl.create({
      header: 'Source de l\'image',
      message: 'Prendre une photo ou importer depuis la galerie ?',
      buttons: [{
        text: 'Annuler',
        role: 'Cancel',
        cssClass: 'warning'
      }, {
        text: 'Photo',
        handler: () => { this.takePicture(optionsCamera); }
      }, {
        text: 'Galerie',
        handler: () => { this.takePicture(optionsGallery); }
      }]
    });
    await alert.present();
  }

  async supprimerImage(index) {
    const alert = await this.alertCtrl.create({
      header: 'Suppression',
      message: 'Cette image, toutes ou annuler ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'warning'
        }, {
          text: 'Oui',
          handler: () => { this.removeImage(index); }
        }, {
          text: 'Toutes',
          handler: () => { this.removeAllImages(); }
        }
      ]
    });
    await alert.present();
  }

  removeImage(index) {
    this.lieu.photo.splice(index, 1);
    this.lieuxService.storeLieux();
  }

  removeAllImages() {
    this.lieu.photo = [];
    this.lieuxService.storeLieux();
  }

  async supprimerLieu(date: number) {
    const alert = await this.alertCtrl.create({
      header: 'Suppression',
      message: 'Supprimer ce lieu ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'warning'
        }, {
          text: 'Oui',
          handler: () => {
            this.lieuxService.removeLieu(date);
            this.navCtrl.navigateBack('/lieux');
            this.presentToastWithOptions();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToastWithOptions() {
    await Toast.show({
      text: 'Lieu supprimé',
      duration: 'short',
      position: 'center'
    });
  }

  majLieu(lieu: Lieu) {
    this.lieuxService.setLieu(lieu);
    this.navCtrl.navigateForward('/update-lieu');
  }



}

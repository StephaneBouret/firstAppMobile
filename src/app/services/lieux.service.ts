import { Injectable } from '@angular/core';
import { Lieu } from '../models/lieu.model';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class LieuxService {
  private lieux: Array<Lieu> = [];
  selectedLieu: Lieu;

  constructor() { }

  setLieu(lieu: Lieu) {
    this.selectedLieu = lieu;
  }

  getSelectedLieu(): Lieu {
    return this.selectedLieu;
  }

  async getLieux(): Promise<any> {
    const datas = await Storage.get({ key: 'lieux' });
    this.lieux = datas.value !== null ? JSON.parse(datas.value) : [];
    return this.lieux;
  }

  addLieu(lieu: Lieu) {
    this.lieux.push(lieu);
    this.storeLieux();
  }

  async storeLieux() {
    return await Storage.set({
      key: 'lieux',
      value: JSON.stringify(this.lieux)
    });
  }

  addPicture(image64: string, lieuDate: number) {
    for (const lieu of this.lieux) {
      if (lieu.creatingDate === lieuDate) {
        lieu.photo.push(image64);
        break;
      }
    }
    this.storeLieux();
  }

  removeLieu(dateLieu: number) {
    this.lieux = this.lieux.filter(element => element.creatingDate !== dateLieu);
    this.storeLieux();
  }

  editLieu(updatedLieu: Lieu) {
    for (let lieu of this.lieux) {
      if (lieu.creatingDate === updatedLieu.creatingDate) {
        lieu = updatedLieu;
        break;
      }
    }
    this.selectedLieu = updatedLieu;
    this.storeLieux();
  }
}

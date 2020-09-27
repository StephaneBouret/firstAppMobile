import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {
  urlPixabayApi = 'https://pixabay.com/api/';
  apiKey = '8199457-3fa56e13f60aceda63450d7a8';

  private imageSelected: any;

  constructor(public http: HttpClient) { }

  searchPixabay(query: string, size: number, page: number) {
    const req = `${this.urlPixabayApi}?key=${this.apiKey}&q=${query}&per_page=${size}&page=${page}&lang=fr`;
    return this.http.get(req);
  }

  defineImage(image: any) {
    this.imageSelected = image;
  }

  getImage() {
    return this.imageSelected;
  }
}

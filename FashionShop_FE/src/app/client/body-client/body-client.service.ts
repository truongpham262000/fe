import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Product, Slider } from '../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class BodyClientService {

  constructor(private _api: Client) { }

  selectProduct(): Observable<Product[]> {
    return this._api.productsAll();
  }
  selectAllSlider(): Observable<Slider[]> {
    return this._api.slidersAll();
  }
}

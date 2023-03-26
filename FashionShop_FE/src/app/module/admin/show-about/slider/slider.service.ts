import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Slider } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Slider[]> {
    return this._api.slidersAll();
  }

  selectOne(id: number): Observable<Slider> {
    return this._api.slidersGET(id);
  }

  insert(body: Slider): Observable<Slider> {
    return this._api.slidersPOST(body);
  }

  update(id: number,body: Slider): Observable<void> {
    return this._api.slidersPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.slidersDELETE(id);
  }
}

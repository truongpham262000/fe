import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, SizeProduct } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class SizeProductService {

  constructor(private _api: Client) { }

  selectAll(): Observable<SizeProduct[]> {
    return this._api.sizeProductsAll();
  }

  selectOne(id: number): Observable<SizeProduct> {
    return this._api.sizeProductsGET(id);
  }

  insert(body: SizeProduct): Observable<SizeProduct> {
    return this._api.sizeProductsPOST(body);
  }

  update(id: number,body: SizeProduct): Observable<void> {
    return this._api.sizeProductsPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.sizeProductsDELETE(id);
  }
}

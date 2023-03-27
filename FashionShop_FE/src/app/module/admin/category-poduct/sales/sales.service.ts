import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Product, Sale } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Sale[]> {
    return this._api.salesAll();
  }

  selectOne(id: number): Observable<Sale> {
    return this._api.salesGET(id);
  }

  insert(body: Sale): Observable<Sale> {
    return this._api.salesPOST(body);
  }

  update(id: number,body: Sale): Observable<void> {
    return this._api.salesPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.salesDELETE(id);
  }

  selectUserId(): Observable<Sale[]> {
    return this._api.usersAll();
  }

  selectProductId(): Observable<Product[]> {
    return this._api.productsAll();
  }
}

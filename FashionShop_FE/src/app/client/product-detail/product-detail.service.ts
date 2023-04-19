import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Product, SizeProduct } from '../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private _api: Client) { }

  selectProduct(id: number): Observable<Product> {
    return this._api.productsGET(id);
  }

  updateProduct(id: number,body: Product): Observable<void> {
    return this._api.productsPUT(id,body);
  }

  selectSize(): Observable<SizeProduct[]> {
    return this._api.sizeProductsAll();
  }


}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Client, Product, SizeProduct } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Product[]> {
    return this._api.productsAll();
  }

  selectOne(id: number): Observable<Product> {
    return this._api.productsGET(id);
  }

  insert(body: Product): Observable<Product> {
    return this._api.productsPOST(body);
  }

  update(id: number,body: Product): Observable<void> {
    return this._api.productsPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.productsDELETE(id);
  }

  selectSizeID(): Observable<SizeProduct[]> {
    return this._api.sizeProductsAll();
  }

  selectCategoryID(): Observable<Category[]> {
    return this._api.categoriesAll();
  }
}

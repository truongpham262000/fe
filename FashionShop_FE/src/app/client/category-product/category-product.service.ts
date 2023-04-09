import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Client, Product } from '../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  constructor(private _api: Client) { }

  selectCategory(): Observable<Category[]> {
    return this._api.categoriesAll();
  }

  selectProduct(): Observable<Product[]> {
    return this._api.productsAll();
  }
}

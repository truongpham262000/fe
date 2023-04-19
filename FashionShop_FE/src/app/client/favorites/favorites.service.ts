import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Client, Favorite, Product, User } from '../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private _api: Client) { }

  selectCategory(): Observable<Category[]> {
    return this._api.categoriesAll();
  }

  selectProduct(): Observable<Product[]> {
    return this._api.productsAll();
  }

  selectFavorites(keyUser: number, keyProduct?: number): Observable<Product[]> {
    return this._api.getFavoriteInfor(keyUser, keyProduct);
  }

  selectCategoryProduct(key: number): Observable<Product[]> {
    return this._api.getCategoryProduct(key);
  }
}

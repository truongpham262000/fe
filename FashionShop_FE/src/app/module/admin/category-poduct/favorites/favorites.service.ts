import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Favorite, Product, User } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Favorite[]> {
    return this._api.favoritesAll();
  }

  selectOne(id: number): Observable<Favorite> {
    return this._api.favoritesGET(id);
  }

  insert(body: Favorite): Observable<Favorite> {
    return this._api.favoritesPOST(body);
  }

  update(id: number,body: Favorite): Observable<void> {
    return this._api.favoritesPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.favoritesDELETE(id);
  }

  selectUserId(): Observable<User[]> {
    return this._api.usersAll();
  }

  selectProductId(): Observable<Product[]> {
    return this._api.productsAll();
  }
}

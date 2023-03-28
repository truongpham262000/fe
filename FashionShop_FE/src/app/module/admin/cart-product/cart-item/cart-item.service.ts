import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartItem, Client, Product } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private _api: Client) { }

  selectAll(): Observable<CartItem[]> {
    return this._api.cartItemsAll();
  }

  selectOne(id: number): Observable<CartItem> {
    return this._api.cartItemsGET(id);
  }

  insert(body: CartItem): Observable<CartItem> {
    return this._api.cartItemsPOST(body);
  }

  update(id: number,body: CartItem): Observable<void> {
    return this._api.cartItemsPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.cartItemsDELETE(id);
  }

  selectProductId(): Observable<Product[]> {
    return this._api.productsAll();
  }

  selectCartId(): Observable<Cart[]> {
    return this._api.cartsAll();
  }
}

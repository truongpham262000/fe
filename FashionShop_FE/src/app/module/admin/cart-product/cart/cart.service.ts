import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, Client, Coupon, Payment, User } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Cart[]> {
    return this._api.cartsAll();
  }

  selectOne(id: number): Observable<Cart> {
    return this._api.cartsGET(id);
  }

  insert(body: Cart): Observable<Cart> {
    return this._api.cartsPOST(body);
  }

  update(id: number,body: Cart): Observable<void> {
    return this._api.cartsPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.cartsDELETE(id);
  }

  selectUserID(): Observable<User[]> {
    return this._api.usersAll();
  }

  selectPaymentID(): Observable<Payment[]> {
    return this._api.paymentsAll();
  }

  selectCouponID(): Observable<Coupon[]> {
    return this._api.couponsAll();
  }
}

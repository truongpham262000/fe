import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Coupon } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Coupon[]> {
    return this._api.couponsAll();
  }

  selectOne(id: number): Observable<Coupon> {
    return this._api.couponsGET(id);
  }

  insert(body: Coupon): Observable<Coupon> {
    return this._api.couponsPOST(body);
  }

  update(id: number,body: Coupon): Observable<void> {
    return this._api.couponsPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.couponsDELETE(id);
  }
}

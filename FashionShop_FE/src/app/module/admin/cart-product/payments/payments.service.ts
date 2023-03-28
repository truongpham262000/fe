import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Payment } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Payment[]> {
    return this._api.paymentsAll();
  }

  selectOne(id: number): Observable<Payment> {
    return this._api.paymentsGET(id);
  }

  insert(body: Payment): Observable<Payment> {
    return this._api.paymentsPOST(body);
  }

  update(id: number,body: Payment): Observable<void> {
    return this._api.paymentsPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.paymentsDELETE(id);
  }
}

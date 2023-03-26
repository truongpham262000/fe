import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, FeedBack, User } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {

  constructor(private _api: Client) { }

  selectAll(): Observable<FeedBack[]> {
    return this._api.feedBacksAll();
  }

  selectOne(id: number): Observable<FeedBack> {
    return this._api.feedBacksGET(id);
  }

  insert(body: FeedBack): Observable<FeedBack> {
    return this._api.feedBacksPOST(body);
  }

  update(id: number,body: FeedBack): Observable<void> {
    return this._api.feedBacksPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.feedBacksDELETE(id);
  }

  selectUser(): Observable<User[]> {
    return this._api.usersAll();
  }
}

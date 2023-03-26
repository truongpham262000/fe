import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Client, User } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _api: Client) { }

  selectAll(): Observable<User[]> {
    return this._api.usersAll();
  }

  selectOne(id: number): Observable<User> {
    return this._api.usersGET(id);
  }

  insert(body: User): Observable<User> {
    return this._api.usersPOST(body);
  }

  update(id: number,body: User): Observable<void> {
    return this._api.usersPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.usersDELETE(id);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, User } from '../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _api: Client) { }

  addUser(body: User): Observable<User> {
    return this._api.usersPOST(body);
  }

  selectUser(): Observable<User[]> {
    return this._api.usersAll();
  }
}

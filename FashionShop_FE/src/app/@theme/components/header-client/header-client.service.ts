import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, User } from '../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderClientService {

  constructor(private _api: Client) { }

  selectUser(key: number): Observable<User> {
    return this._api.usersGET(key);
  }
}

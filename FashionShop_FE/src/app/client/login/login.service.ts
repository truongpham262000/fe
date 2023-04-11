import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, User } from '../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private _api: Client) { }

  selectUser(): Observable<User[]> {
    return this._api.usersAll();
  }
}

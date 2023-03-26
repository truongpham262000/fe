import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Role } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Role[]> {
    return this._api.rolesAll();
  }

  selectOne(id: number): Observable<Role> {
    return this._api.rolesGET(id);
  }

  insert(body: Role): Observable<Role> {
    return this._api.rolesPOST(body);
  }

  update(id: number,body: Role): Observable<void> {
    return this._api.rolesPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.rolesDELETE(id);
  }
}

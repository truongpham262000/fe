import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About, Client } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class AboutsService {

  constructor(private _api: Client) { }

  selectAll():Observable<About[]> {
    return this._api.aboutsAll();
  }

  selectOne(id: number): Observable<About> {
    return this._api.aboutsGET(id);
  }

  insert(body: About): Observable<About> {
    return this._api.aboutsPOST(body);
  }

  update(id: number,body: About): Observable<void> {
    return this._api.aboutsPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.aboutsDELETE(id);
  }
}

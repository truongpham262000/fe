import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Client } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Category[]> {
    return this._api.categoriesAll();
  }

  selectOne(id: number): Observable<Category> {
    return this._api.categoriesGET(id);
  }

  insert(body: Category): Observable<Category> {
    return this._api.categoriesPOST(body);
  }

  update(id: number,body: Category): Observable<void> {
    return this._api.categoriesPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.categoriesDELETE(id);
  }
}

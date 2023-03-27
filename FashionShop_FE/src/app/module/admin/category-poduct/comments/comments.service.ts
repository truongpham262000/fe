import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Comment, Product, User } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _api: Client) { }

  selectAll(): Observable<Comment[]> {
    return this._api.commentsAll();
  }

  selectOne(id: number): Observable<Comment> {
    return this._api.commentsGET(id);
  }

  insert(body: Comment): Observable<Comment> {
    return this._api.commentsPOST(body);
  }

  update(id: number,body: Comment): Observable<void> {
    return this._api.commentsPUT(id,body);
  }

  delete(id: number): Observable<void> {
    return this._api.commentsDELETE(id);
  }

  selectUserId(): Observable<User[]> {
    return this._api.usersAll();
  }

  selectProductId(): Observable<Product[]> {
    return this._api.productsAll();
  }
}

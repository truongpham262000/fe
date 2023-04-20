import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartItem, Category, Client, Product, User } from '../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  constructor(private _api: Client) { }

  //Category

  selectCategoryProduct(key: number): Observable<Product[]> {
    return this._api.getCategoryProduct(key);
  }

  selectCategory(): Observable<Category[]> {
    return this._api.categoriesAll();
  }

  //Product

  selectProduct(): Observable<Product[]> {
    return this._api.productsAll();
  }

  selectOneProduct(id: number): Observable<Product> {
    return this._api.productsGET(id);
  }

  updateProduct(id: number, body: Product): Observable<void> {
    return this._api.productsPUT(id,body);
  }

  //Cart

  selectAllCart(): Observable<Cart[]> {
    return this._api.cartsAll();
  }

  insertCart(body: Cart): Observable<Cart> {
    return this._api.cartsPOST(body);
  }

  updateCart(id: number, body: Cart): Observable<void> {
    return this._api.cartsPUT(id,body);
  }

  //Cart Item

  selectAllCartItem(): Observable<CartItem[]> {
    return this._api.cartItemsAll();
  }

  insertCartItem(body: CartItem): Observable<CartItem> {
    return this._api.cartItemsPOST(body);
  }

  updateCartItem(id: number, body: CartItem): Observable<void> {
    return this._api.cartItemsPUT(id,body);
  }

  //User

  selectUser(id: number): Observable<User> {
    return this._api.usersGET(id);
  }
}

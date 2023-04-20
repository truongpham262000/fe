import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Cart, CartItem, Product, User } from '../../@core/data/FashionShopApi.service';
import { CategoryProductService } from './category-product.service';

@Component({
  selector: 'ngx-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit {

  constructor(
    private _service: CategoryProductService,
    private routes: Router
  ) { }
  target: any[];
  p;

  Userid: number = localStorage.getItem('login') !== null ? parseInt(localStorage.getItem('login')) : null;

  ngOnInit(): void {
    this._service.selectCategory().subscribe(res => {
      this.target = [{name: 'Tất cả', categoryId: 0},...res];
    });
    this._service.selectProduct().subscribe(res => {
      this.productCategory = res;
    });
    this.selectValue = this.listSort[0].value;
  }

  listSort: any[] = [{text: 'Tất cả', value: ''},{text: 'Giá tăng dần',value: 'asc'},{text: 'Giá giảm dần',value: 'desc'}];
  selectValue: number;

  productCategory: any[];

  getDataProduct(value: number) {
    if(value === 0){
      this._service.selectProduct().subscribe(res => {
        this.productCategory = res;
      })
    } else {
      this._service.selectCategoryProduct(value).subscribe(res => {
        this.productCategory = res;
      })
    }
  }

  //Add to card
  selectOneProduct: Product = new Product();
  selectAllCartItem: CartItem[];
  listCart: Cart = new Cart();
  listUser: User = new User();
  listCartItem: CartItem = new CartItem();

  addToCard(id: number){
    if(this.Userid !== null){
      this._service.selectOneProduct(id).subscribe(res => {
        if(res) {
          this.selectOneProduct = res;
        }
      })

      this._service.selectUser(this.Userid).subscribe(res => {
        if(res) {
          this.listUser = res;
        }
      })

      //Insert to cart
      this.listCart.userId = this.listUser.userId;
      this.listCart.fullName = this.listUser.fullName;
      this.listCart.phoneNumber = this.listUser.phoneNumber;
      this.listCart.email = this.listUser.email;

      this._service.insertCart(this.listCart).subscribe();
  
      this._service.selectAllCartItem().subscribe(res => {
        if(res) {
          let quantity = 0;
          let id = 0;
          for (const item of res) {
            if(item.cartId === this.listCart.cartId && item.productId === id) {
              quantity = item.quantity + 1;
              id = item.cartItemId;
            }
          }

          this.listCartItem.quantity = quantity;
          this._service.updateCartItem(id, this.listCartItem).subscribe();
        }
      })
    } else {
      this.routes.navigateByUrl("/login")
    }
    
  }

  detailProduct(id: number) {
    if(this.Userid !== null){
      this.routes.navigate(["/product-details",id])
    } else {
      this.routes.navigateByUrl("/login")
    }
  }

}

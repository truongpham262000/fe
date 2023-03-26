import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemIndexComponent } from './cart-item-index/cart-item-index.component';
import { CartItemCrudComponent } from './cart-item-crud/cart-item-crud.component';
import { CartItemRoutingModule } from './cart-item-routing.module';

@NgModule({
  declarations: [
    CartItemIndexComponent,
    CartItemCrudComponent
  ],
  imports: [
    CommonModule,
    CartItemRoutingModule
  ]
})
export class CartItemModule { }

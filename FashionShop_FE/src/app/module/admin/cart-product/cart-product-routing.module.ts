import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as cartRoutes } from './cart/cart-routing.module';
import { routes as cartItemRoutes } from './cart-item/cart-item-routing.module';
import { routes as couponRoutes } from './coupon/coupon-routing.module';
import { routes as paymentsRoutes } from './payments/payments-routing.module';

export const routes: Routes =[
  {
    path: '',
    children: [
      { path: 'cart', children: cartRoutes },
      { path: 'cart-Items', children: cartItemRoutes },
      { path: 'coupon', children: couponRoutes },
      { path: 'payments', children: paymentsRoutes }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartProductRoutingModule { }

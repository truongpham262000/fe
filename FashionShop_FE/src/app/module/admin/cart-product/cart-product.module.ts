import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductRoutingModule } from './cart-product-routing.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { CouponModule } from './coupon/coupon.module';
import { PaymentsModule } from './payments/payments.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartProductRoutingModule,
    CartModule,
    CartItemModule,
    CouponModule,
    PaymentsModule
  ]
})
export class CartProductModule { }

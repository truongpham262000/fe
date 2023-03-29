import { NgModule } from '@angular/core';
import { CartProductRoutingModule } from './cart-product-routing.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { CouponModule } from './coupon/coupon.module';
import { PaymentsModule } from './payments/payments.module';
import { CommonModule } from '@angular/common';

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

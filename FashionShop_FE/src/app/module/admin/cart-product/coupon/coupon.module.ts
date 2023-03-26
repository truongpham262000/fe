import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponIndexComponent } from './coupon-index/coupon-index.component';
import { CouponCrudComponent } from './coupon-crud/coupon-crud.component';
import { CouponRoutingModule } from './coupon-routing.module';

@NgModule({
  declarations: [
    CouponIndexComponent,
    CouponCrudComponent
  ],
  imports: [
    CommonModule,
    CouponRoutingModule
  ]
})
export class CouponModule { }

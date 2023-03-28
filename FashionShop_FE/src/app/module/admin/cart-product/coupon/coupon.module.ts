import { NgModule } from '@angular/core';
import { CouponIndexComponent } from './coupon-index/coupon-index.component';
import { CouponCrudComponent } from './coupon-crud/coupon-crud.component';
import { CouponRoutingModule } from './coupon-routing.module';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    CouponIndexComponent,
    CouponCrudComponent
  ],
  imports: [
    CouponRoutingModule,
    FormsModule,
    ThemeModule,
    NbCardModule
  ]
})
export class CouponModule { }

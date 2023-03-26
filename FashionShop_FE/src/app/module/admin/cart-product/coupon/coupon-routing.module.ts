import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponIndexComponent } from './coupon-index/coupon-index.component';

export const routes: Routes = [
  {
    path: '',
    component: CouponIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }

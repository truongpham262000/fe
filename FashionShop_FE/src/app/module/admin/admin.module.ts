import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { CartProductModule } from './cart-product/cart-product.module';
import { CategoryPoductModule } from './category-poduct/category-poduct.module';
import { SettingUserModule } from './setting-user/setting-user.module';
import { ShowAboutModule } from './show-about/show-about.module';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { DashboardInforModule } from './dashboard-infor/dashboard-infor.module';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    CartProductModule,
    CategoryPoductModule,
    SettingUserModule,
    ShowAboutModule,
    DashboardInforModule,
    FormsModule,
    NbCardModule,
    ThemeModule,
    NgApexchartsModule
  ],
  declarations: []
})
export class AdminModule { }

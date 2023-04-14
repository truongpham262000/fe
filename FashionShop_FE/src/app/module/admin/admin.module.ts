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
import { DashboardInforComponent } from './dashboard-infor/dashboard-infor.component';
import { CommonModule } from '@angular/common';

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
    ThemeModule
  ],
  declarations: [DashboardInforComponent]
})
export class AdminModule { }

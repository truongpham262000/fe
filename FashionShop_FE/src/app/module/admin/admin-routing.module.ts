import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as showAboutRoutes } from './show-about/show-about-routing.module';
import { routes as categoryProductRoutes } from './category-poduct/category-poduct-routing.module';
import { routes as cartProductRoutes } from './cart-product/cart-product-routing.module';
import { routes as settingUserRoutes } from './setting-user/setting-user-routing.module';
import { routes as dasboardInforRoutes } from './dashboard-infor/dashboard-infor-routing.module';

export const routes: Routes =[
  {
    path: '',
    children: [
      { path: '', children: dasboardInforRoutes },
      { path: 'show-about', children: showAboutRoutes },
      { path: 'category-product', children: categoryProductRoutes },
      { path: 'cart-products', children: cartProductRoutes },
      { path: 'setting-user', children: settingUserRoutes }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

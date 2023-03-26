import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as productRoutes } from './product/product-routing.module';
import { routes as categoryRoutes } from './category/category-routing.module';
import { routes as sizeProductRoutes } from './size-product/size-product-routing.module';
import { routes as salesRoutes } from './sales/sales-routing.module';
import { routes as commentsRoutes } from './comments/comments-routing.module';
import { routes as favoritesRoutes } from './favorites/favorites-routing.module';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'products', children: productRoutes },
      { path: 'category', children: categoryRoutes },
      { path: 'size-product', children: sizeProductRoutes },
      { path: 'sales', children: salesRoutes },
      { path: 'comments', children: commentsRoutes },
      { path: 'favorites', children: favoritesRoutes }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryPoductRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as productRoutes } from './product/product-routing.module';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'products', children: productRoutes }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class CategoryPoductRoutingModule { }

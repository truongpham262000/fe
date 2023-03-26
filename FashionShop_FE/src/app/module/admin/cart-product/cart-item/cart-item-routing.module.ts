import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemIndexComponent } from './cart-item-index/cart-item-index.component';

export const routes: Routes = [
  {
    path: '',
    component: CartItemIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartItemRoutingModule { }

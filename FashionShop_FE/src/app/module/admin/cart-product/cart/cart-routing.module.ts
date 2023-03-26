import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartIndexComponent } from './cart-index/cart-index.component';

export const routes: Routes = [
  {
    path: '',
    component: CartIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }

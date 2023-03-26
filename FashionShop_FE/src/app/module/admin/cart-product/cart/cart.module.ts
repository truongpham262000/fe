import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartIndexComponent } from './cart-index/cart-index.component';
import { CartCrudComponent } from './cart-crud/cart-crud.component';

@NgModule({
  declarations: [
    CartIndexComponent,
    CartCrudComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }

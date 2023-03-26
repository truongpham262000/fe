import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeProductIndexComponent } from './size-product-index/size-product-index.component';
import { SizeProductCrudComponent } from './size-product-crud/size-product-crud.component';
import { SizeProductRoutingModule } from './size-product-routing.module';

@NgModule({
  declarations: [
    SizeProductIndexComponent,
    SizeProductCrudComponent
  ],
  imports: [
    CommonModule,
    SizeProductRoutingModule
  ]
})
export class SizeProductModule { }

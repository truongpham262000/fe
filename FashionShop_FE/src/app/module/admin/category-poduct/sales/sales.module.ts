import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesIndexComponent } from './sales-index/sales-index.component';
import { SalesCrudComponent } from './sales-crud/sales-crud.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  declarations: [
    SalesIndexComponent,
    SalesCrudComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }

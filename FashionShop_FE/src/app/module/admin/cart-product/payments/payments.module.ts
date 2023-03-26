import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsIndexComponent } from './payments-index/payments-index.component';
import { PaymentsCrudComponent } from './payments-crud/payments-crud.component';
import { PaymentsRoutingModule } from './payments-routing.module';

@NgModule({
  declarations: [
    PaymentsIndexComponent,
    PaymentsCrudComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }

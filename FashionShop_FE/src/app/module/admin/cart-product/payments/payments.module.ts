import { NgModule } from '@angular/core';
import { PaymentsIndexComponent } from './payments-index/payments-index.component';
import { PaymentsCrudComponent } from './payments-crud/payments-crud.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';

@NgModule({
  declarations: [
    PaymentsIndexComponent,
    PaymentsCrudComponent
  ],
  imports: [
    PaymentsRoutingModule,
    FormsModule,
    NbCardModule,
    ThemeModule
  ]
})
export class PaymentsModule { }

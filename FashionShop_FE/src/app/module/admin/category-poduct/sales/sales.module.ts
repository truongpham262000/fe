import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { SalesIndexComponent } from './sales-index/sales-index.component';
import { SalesCrudComponent } from './sales-crud/sales-crud.component';
import { SalesRoutingModule } from './sales-routing.module';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    SalesIndexComponent,
    SalesCrudComponent
  ],
  imports: [
    SalesRoutingModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class SalesModule { }

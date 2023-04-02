import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { CartIndexComponent } from './cart-index/cart-index.component';
import { CartCrudComponent } from './cart-crud/cart-crud.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    CartIndexComponent,
    CartCrudComponent
  ],
  imports: [
    CartRoutingModule,
    FormsModule,
    NbCardModule,
    ThemeModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class CartModule { }

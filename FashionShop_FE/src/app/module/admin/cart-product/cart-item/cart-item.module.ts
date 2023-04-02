import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CartItemIndexComponent } from './cart-item-index/cart-item-index.component';
import { CartItemCrudComponent } from './cart-item-crud/cart-item-crud.component';
import { CartItemRoutingModule } from './cart-item-routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';

@NgModule({
  declarations: [
    CartItemIndexComponent,
    CartItemCrudComponent
  ],
  imports: [
    CartItemRoutingModule,
    FormsModule,
    NgSelectModule,
    NbCardModule,
    ThemeModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class CartItemModule { }

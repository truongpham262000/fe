import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';

@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductCrudComponent
  ],
  imports: [
    ProductRoutingModule,
    FormsModule,
    NgSelectModule,
    NbCardModule,
    ThemeModule
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { SizeProductIndexComponent } from './size-product-index/size-product-index.component';
import { SizeProductCrudComponent } from './size-product-crud/size-product-crud.component';
import { SizeProductRoutingModule } from './size-product-routing.module';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    SizeProductIndexComponent,
    SizeProductCrudComponent
  ],
  imports: [
    SizeProductRoutingModule,
    FormsModule,
    ThemeModule,
    NbCardModule
  ]
})
export class SizeProductModule { }

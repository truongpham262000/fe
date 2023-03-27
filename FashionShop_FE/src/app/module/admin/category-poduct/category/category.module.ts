import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CategoryIndexComponent } from './category-index/category-index.component';
import { CategoryCrudComponent } from './category-crud/category-crud.component';
import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';

@NgModule({
  declarations: [
    CategoryIndexComponent,
    CategoryCrudComponent
  ],
  imports: [
    CategoryRoutingModule,
    FormsModule,
    NbCardModule,
    ThemeModule,
    NgSelectModule
  ]
})
export class CategoryModule { }

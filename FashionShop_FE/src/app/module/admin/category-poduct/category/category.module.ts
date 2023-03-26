import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIndexComponent } from './category-index/category-index.component';
import { CategoryCrudComponent } from './category-crud/category-crud.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [
    CategoryIndexComponent,
    CategoryCrudComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }

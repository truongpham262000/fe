import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPoductRoutingModule } from './category-poduct-routing.module';
import { CategoryModule } from './category/category.module';
import { CommentsModule } from './comments/comments.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ProductModule } from './product/product.module';
import { SalesModule } from './sales/sales.module';
import { SizeProductModule } from './size-product/size-product.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryPoductRoutingModule,
    CategoryModule,
    CommentsModule,
    FavoritesModule,
    ProductModule,
    SalesModule,
    SizeProductModule
  ]
})
export class CategoryPoductModule { }

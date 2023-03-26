import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesIndexComponent } from './favorites-index/favorites-index.component';
import { FavoritesCrudComponent } from './favorites-crud/favorites-crud.component';
import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
  declarations: [
    FavoritesIndexComponent,
    FavoritesCrudComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }

import { NgSelectModule } from '@ng-select/ng-select';
import { NbCardModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { FavoritesIndexComponent } from './favorites-index/favorites-index.component';
import { FavoritesCrudComponent } from './favorites-crud/favorites-crud.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../@theme/theme.module';

@NgModule({
  declarations: [
    FavoritesIndexComponent,
    FavoritesCrudComponent
  ],
  imports: [
    FavoritesRoutingModule,
    NbCardModule,
    FormsModule,
    ThemeModule,
    NgSelectModule
  ]
})
export class FavoritesModule { }

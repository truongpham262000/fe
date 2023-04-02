import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
    NgSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class FavoritesModule { }

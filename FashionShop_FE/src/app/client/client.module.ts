import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { ClientRoutingModule } from './client-routing.module';
import { NbCardModule, NbListModule, NbTableModule, NbTabsetModule } from '@nebular/theme';
import { ClientComponent } from './client.component';
import { BodyClientModule } from './body-client/body-client.module';
import { ContactComponent } from './contact/contact.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    ClientComponent,
    ContactComponent,
    CategoryProductComponent,
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    ClientRoutingModule,
    NbCardModule,
    NbListModule,
    NbTableModule,
    NbTabsetModule,
    BodyClientModule,
  ]
})
export class ClientModule { }

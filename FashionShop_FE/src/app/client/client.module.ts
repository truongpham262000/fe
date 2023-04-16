import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { ClientRoutingModule } from './client-routing.module';
import { NbCardModule, NbListModule, NbTableModule, NbTabsetModule, NbToastrModule } from '@nebular/theme';
import { ClientComponent } from './client.component';
import { BodyClientModule } from './body-client/body-client.module';
import { ContactComponent } from './contact/contact.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { UserInforComponent } from './user-infor/user-infor.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortPipe } from '../@core/customs/sort.pipe';

@NgModule({
  declarations: [
    ClientComponent,
    ContactComponent,
    CategoryProductComponent,
    FavoritesComponent,
    ProductDetailComponent,
    CartComponent,
    AboutComponent,
    UserInforComponent,
    RegisterComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbTabsetModule,
    BodyClientModule,
    ClientRoutingModule,
    FormsModule,
    LoginModule,
    HttpClientModule,
    NgSelectModule,
    NgxPaginationModule,
    NbToastrModule
  ],
  providers: [SortPipe]
})
export class ClientModule { }

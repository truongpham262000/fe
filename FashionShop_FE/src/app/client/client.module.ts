import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { ClientRoutingModule } from './client-routing.module';
import { NbCardModule, NbListModule, NbTableModule, NbTabsetModule } from '@nebular/theme';
import { ClientComponent } from './client.component';
import { BodyClientModule } from './body-client/body-client.module';
import { ContactComponent } from './contact/contact.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { UserInforComponent } from './user-infor/user-infor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbTabsetModule,
    BodyClientModule,
    ClientRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ClientModule { }

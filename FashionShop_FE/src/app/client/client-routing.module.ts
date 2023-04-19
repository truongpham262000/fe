import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyClientComponent } from './body-client/body-client.component';
import { CartComponent } from './cart/cart.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { ClientComponent } from './client.component';
import { ContactComponent } from './contact/contact.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { UserInforComponent } from './user-infor/user-infor.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: BodyClientComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product', component: CategoryProductComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'product-details/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'user-info', component: UserInforComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

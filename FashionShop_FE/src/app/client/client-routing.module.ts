import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyClientComponent } from './body-client/body-client.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { ClientComponent } from './client.component';
import { ContactComponent } from './contact/contact.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: BodyClientComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product', component: CategoryProductComponent },
      { path: 'favorites', component: FavoritesComponent }
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInforComponent } from './dashboard-infor/dashboard-infor.component';
import { routes as showAboutRoutes } from './show-about/show-about-routing.module';
import { routes as categoryProductRoutes } from './category-poduct/category-poduct-routing.module';

export const routes: Routes =[
  {
    path: '',
    children: [
      { path: '', component: DashboardInforComponent },
      { path: 'show-about', children: showAboutRoutes },
      { path: 'category-product', children: categoryProductRoutes }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

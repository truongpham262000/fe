import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as aboutRoutes } from './abouts/abouts-routing.module';
import { routes as sliderRoutes } from './slider/slider-routing.module';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'abouts', children: aboutRoutes },
      { path: 'slider', children: sliderRoutes }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowAboutRoutingModule { }

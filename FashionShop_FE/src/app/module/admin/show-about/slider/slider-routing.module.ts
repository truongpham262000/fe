import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderIndexComponent } from './slider-index/slider-index.component';

export const routes: Routes = [
  {
    path: '',
    component: SliderIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class SliderRoutingModule { }

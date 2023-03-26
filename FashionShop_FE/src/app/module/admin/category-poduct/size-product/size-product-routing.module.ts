import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SizeProductIndexComponent } from './size-product-index/size-product-index.component';

export const routes: Routes =[
  {
    path: '',
    component: SizeProductIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizeProductRoutingModule { }

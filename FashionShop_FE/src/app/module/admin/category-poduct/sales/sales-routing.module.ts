import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesIndexComponent } from './sales-index/sales-index.component';

export const routes: Routes = [
  {
    path: '',
    component: SalesIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }

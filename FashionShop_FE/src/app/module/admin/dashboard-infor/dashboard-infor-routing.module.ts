import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInforComponent } from './dashboard-infor.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardInforComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardInforRoutingModule { }

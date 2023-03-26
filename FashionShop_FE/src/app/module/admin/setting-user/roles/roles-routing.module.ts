import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesIndexComponent } from './roles-index/roles-index.component';

export const routes: Routes =[
  {
    path: '',
    component: RolesIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }

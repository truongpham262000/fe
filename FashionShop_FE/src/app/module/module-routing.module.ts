import { ModuleComponent } from './module.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as adminRoutes } from './admin/admin-routing.module';

export const routes: Routes = [
  {
    path: '',
    component: ModuleComponent,
    children: [
      { path: '', children: adminRoutes}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }

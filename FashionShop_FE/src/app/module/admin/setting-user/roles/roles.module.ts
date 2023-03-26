import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesIndexComponent } from './roles-index/roles-index.component';
import { RolesCrudComponent } from './roles-crud/roles-crud.component';
import { RolesRoutingModule } from './roles-routing.module';

@NgModule({
  declarations: [
    RolesIndexComponent,
    RolesCrudComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }

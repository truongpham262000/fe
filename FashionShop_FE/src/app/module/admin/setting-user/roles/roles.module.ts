import { NbCardModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesIndexComponent } from './roles-index/roles-index.component';
import { RolesCrudComponent } from './roles-crud/roles-crud.component';
import { RolesRoutingModule } from './roles-routing.module';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../@theme/theme.module';

@NgModule({
  declarations: [
    RolesIndexComponent,
    RolesCrudComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    NbCardModule,
    FormsModule,
    ThemeModule
  ]
})
export class RolesModule { }

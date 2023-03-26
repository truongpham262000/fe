import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    UserIndexComponent,
    UserCrudComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NgSelectModule
  ]
})
export class UserModule { }

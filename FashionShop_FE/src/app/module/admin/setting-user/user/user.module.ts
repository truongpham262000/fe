import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserIndexComponent,
    UserCrudComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

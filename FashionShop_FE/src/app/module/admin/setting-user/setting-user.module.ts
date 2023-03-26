import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingUserRoutingModule } from './setting-user-routing.module';
import { FeedBackModule } from './feed-back/feed-back.module';
import { RolesModule } from './roles/roles.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingUserRoutingModule,
    FeedBackModule,
    RolesModule,
    UserModule
  ]
})
export class SettingUserModule { }

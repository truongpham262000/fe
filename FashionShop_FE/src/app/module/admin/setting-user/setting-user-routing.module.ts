import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as userRoutes } from './user/user-routing.module';
import { routes as rolesRoutes } from './roles/roles-routing.module';
import { routes as feedBackRoutes } from './feed-back/feed-back-routing.module';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'user', children: userRoutes },
      { path: 'roles', children: rolesRoutes },
      { path: 'feed-back', children: feedBackRoutes }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingUserRoutingModule { }

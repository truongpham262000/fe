import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyClientComponent } from './body-client/body-client.component';
import { ClientComponent } from './client.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: BodyClientComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
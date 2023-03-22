import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsIndexComponent } from './abouts-index/abouts-index.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutsIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class AboutsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsIndexComponent } from './comments-index/comments-index.component';

export const routes: Routes = [
  {
    path: '',
    component: CommentsIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }

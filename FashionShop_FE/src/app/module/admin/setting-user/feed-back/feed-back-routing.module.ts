import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedBackIndexComponent } from './feed-back-index/feed-back-index.component';

export const routes: Routes = [
  {
    path: '',
    component: FeedBackIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedBackRoutingModule { }

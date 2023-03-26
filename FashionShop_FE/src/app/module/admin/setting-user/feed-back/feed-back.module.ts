import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedBackRoutingModule } from './feed-back-routing.module';
import { FeedBackIndexComponent } from './feed-back-index/feed-back-index.component';
import { FeedBackCrudComponent } from './feed-back-crud/feed-back-crud.component';

@NgModule({
  declarations: [
    FeedBackIndexComponent,
    FeedBackCrudComponent
  ],
  imports: [
    CommonModule,
    FeedBackRoutingModule
  ]
})
export class FeedBackModule { }

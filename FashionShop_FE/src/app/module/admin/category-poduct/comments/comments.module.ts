import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsIndexComponent } from './comments-index/comments-index.component';
import { CommentsCrudComponent } from './comments-crud/comments-crud.component';
import { CommentsRoutingModule } from './comments-routing.module';



@NgModule({
  declarations: [
    CommentsIndexComponent,
    CommentsCrudComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }

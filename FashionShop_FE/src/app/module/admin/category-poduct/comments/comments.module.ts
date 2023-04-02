import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CommentsIndexComponent } from './comments-index/comments-index.component';
import { CommentsCrudComponent } from './comments-crud/comments-crud.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CommentsIndexComponent,
    CommentsCrudComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    FormsModule,
    NbCardModule,
    NgSelectModule,
    ThemeModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class CommentsModule { }

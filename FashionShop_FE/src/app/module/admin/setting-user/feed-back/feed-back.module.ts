import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedBackRoutingModule } from './feed-back-routing.module';
import { FeedBackIndexComponent } from './feed-back-index/feed-back-index.component';
import { FeedBackCrudComponent } from './feed-back-crud/feed-back-crud.component';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    FeedBackIndexComponent,
    FeedBackCrudComponent
  ],
  imports: [
    CommonModule,
    FeedBackRoutingModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NgSelectModule
  ]
})
export class FeedBackModule { }

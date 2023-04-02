import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { SliderRoutingModule } from './slider-routing.module';
import { SliderIndexComponent } from './slider-index/slider-index.component';
import { SliderCrudComponent } from './slider-crud/slider-crud.component';
import { ThemeModule } from '../../../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    SliderIndexComponent,
    SliderCrudComponent
  ],
  imports: [
    SliderRoutingModule,
    ThemeModule,
    NbCardModule,
    FormsModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class SliderModule { }

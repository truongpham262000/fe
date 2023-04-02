import { NgModule } from '@angular/core';
import { AboutsIndexComponent } from './abouts-index/abouts-index.component';
import { AboutsCrudComponent } from './abouts-crud/abouts-crud.component';
import { AboutsRoutingModule } from './abouts-routing.module';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AboutsIndexComponent,
    AboutsCrudComponent,
  ],
  imports: [
    AboutsRoutingModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
    MatDialogModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class AboutsModule { }

import { NgModule } from '@angular/core';
import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModuleComponent],
  imports: [
    ModuleRoutingModule,
    AdminModule,
    ThemeModule,
    NbMenuModule,
    FormsModule
  ]
})
export class ModuleModule { }

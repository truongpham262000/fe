import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';

@NgModule({
  declarations: [ModuleComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    ThemeModule,
    NbMenuModule
  ]
})
export class ModuleModule { }

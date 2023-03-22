import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutsIndexComponent } from './abouts-index/abouts-index.component';
import { AboutsCrudComponent } from './abouts-crud/abouts-crud.component';
import { AboutsRoutingModule } from './abouts-routing.module';



@NgModule({
  declarations: [
    AboutsIndexComponent,
    AboutsCrudComponent
  ],
  imports: [
    CommonModule,
    AboutsRoutingModule
  ]
})
export class AboutsModule { }

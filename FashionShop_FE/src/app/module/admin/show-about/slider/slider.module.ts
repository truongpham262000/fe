import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderRoutingModule } from './slider-routing.module';
import { SliderIndexComponent } from './slider-index/slider-index.component';
import { SliderCrudComponent } from './slider-crud/slider-crud.component';

@NgModule({
  declarations: [
    SliderIndexComponent,
    SliderCrudComponent
  ],
  imports: [
    CommonModule,
    SliderRoutingModule
  ]
})
export class SliderModule { }

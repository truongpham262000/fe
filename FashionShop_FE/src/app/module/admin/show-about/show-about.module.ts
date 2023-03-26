import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAboutRoutingModule } from './show-about-routing.module';
import { AboutsModule } from './abouts/abouts.module';
import { SliderModule } from './slider/slider.module';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ShowAboutRoutingModule,
    AboutsModule,
    SliderModule,
    FormsModule,
    NbCardModule,
    ThemeModule
  ]
})
export class ShowAboutModule { }

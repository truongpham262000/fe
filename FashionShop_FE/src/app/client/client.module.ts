import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { ClientRoutingModule } from './client-routing.module';
import { NbCardModule, NbLayoutModule } from '@nebular/theme';
import { ClientComponent } from './client.component';
import { FooterClientComponent } from './footer-client/footer-client.component';
import { BodyClientComponent } from './body-client/body-client.component';
import { HeaderClientComponent } from './header-client/header-client.component';

@NgModule({
  declarations: [
    ClientComponent, 
    FooterClientComponent, 
    BodyClientComponent,
    HeaderClientComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    ClientRoutingModule,
    NbCardModule,
    NbLayoutModule,
  ]
})
export class ClientModule { }

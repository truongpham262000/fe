import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { ClientRoutingModule } from './client-routing.module';
import { NbCardModule, NbListModule, NbTableModule, NbTabsetModule } from '@nebular/theme';
import { ClientComponent } from './client.component';
import { BodyClientModule } from './body-client/body-client.module';

@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    ClientRoutingModule,
    NbCardModule,
    NbListModule,
    NbTableModule,
    NbTabsetModule,
    BodyClientModule,
  ]
})
export class ClientModule { }

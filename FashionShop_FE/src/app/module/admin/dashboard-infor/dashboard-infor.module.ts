import { NgModule } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { ChartCircleComponent } from './chart-circle/chart-circle.component';
import { DashboardInforRoutingModule } from './dashboard-infor-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardInforComponent } from './dashboard-infor.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DashboardInforComponent,
    ChartComponent,
    ChartCircleComponent
  ],
  imports: [
    CommonModule,
    DashboardInforRoutingModule,
    NgApexchartsModule,
  ]
})
export class DashboardInforModule { }

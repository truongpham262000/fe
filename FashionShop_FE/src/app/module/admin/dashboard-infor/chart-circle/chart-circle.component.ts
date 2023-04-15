import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ChartComponent,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: "ngx-chart-circle",
  templateUrl: "./chart-circle.component.html",
  styleUrls: ["./chart-circle.component.scss"],
})
export class ChartCircleComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Số lượng",
          data: [1750, 3728, 840, 289, 5270, 9200, 3800, 980, 455]
        }
      ],
      chart: {
        type: "bar",
        height: 400
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Áo phông",
          "Quần âu",
          "Áo sơ mi",
          "Quần vải",
          "Đồ thu đông",
          "Giày vải",
          "Túi sách",
          "Son dưỡng ẩm",
          "Kem chống nắng",
        ],
      }
    };
  }

  ngOnInit(): void {}
}

import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAnnotations,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexPlotOptions,
  ApexStroke,
  ApexYAxis,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
};

@Component({
  selector: "ngx-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Số lượng",
          data: [1750, 3728, 840, 289, 5270, 9200, 3800, 980, 455],
        },
      ],
      annotations: {
        points: [
          {
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0",
              },
            },
          },
        ],
      },
      chart: {
        height: 500,
        type: "bar",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
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
        tickPlacement: "on",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100],
        },
      },
    };
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";
import { Chart, ChartConfiguration, ChartItem, registerables } from "chart.js";
Chart.register(...registerables);

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  DATA_COUNT = 5;
  NUMBER_CFG = { count: this.DATA_COUNT, min: 0, max: 100 };

  chartData = {
    labels: ["WBTC", "USDC"],
    datasets: [
      {
        label: "Dataset 1",
        data: [30, 70],
        backgroundColor: ["#007EAF", "#24126A"],
        tension: 0.4,
      },
    ],
  };

  config = {
    type: "pie",
    data: this.chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "Chart.js Pie Chart",
        },
      },
    },
  };

  myChart;

  constructor() {}

  ngOnInit(): void {
    const ctx = document.getElementById("myPie") as ChartItem;

    this.myChart = new Chart(ctx, this.config as ChartConfiguration);
  }
}

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
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 50, 20],
        backgroundColor: Object.values({
          red: "rgb(255, 99, 132)",
          orange: "rgb(255, 159, 64)",
          yellow: "rgb(255, 205, 86)",
          green: "rgb(75, 192, 192)",
          blue: "rgb(54, 162, 235)",
          purple: "rgb(153, 102, 255)",
          grey: "rgb(201, 203, 207)",
        }),
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
          position: "top",
        },
        title: {
          display: true,
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

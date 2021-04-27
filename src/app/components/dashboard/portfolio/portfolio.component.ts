import { BalanceService } from "./../../../services/api/balance.service";
import { Component, OnInit } from "@angular/core";
import { Chart, ChartConfiguration, ChartItem, registerables } from "chart.js";
Chart.register(...registerables);

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  myChart;
  userBalance: any;

  constructor(private balanceService: BalanceService) {}

  async ngOnInit(): Promise<void> {
    this.userBalance = await this.balanceService.getAll();

    const chartData = {
      labels: this.userBalance.map((e) => e.symbol),
      datasets: [
        {
          label: "Dataset 1",
          data: this.userBalance.map((e) => e.percentage),
          backgroundColor: ["#007EAF", "#24126A"],
          tension: 0.4,
        },
      ],
    };

    const config = {
      type: "pie",
      data: chartData,
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

    const ctx = document.getElementById("myPie") as ChartItem;

    this.myChart = new Chart(ctx, config as ChartConfiguration);
  }
}

import { FocusTrap } from "@angular/cdk/a11y";
import { Component, OnInit } from "@angular/core";
import { Chart, ChartConfiguration, ChartData, ChartItem, ChartOptions, registerables } from "chart.js";
Chart.register(...registerables);

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  myChart;

  constructor() {}

  ngOnInit(): void {
    const DATA_COUNT = 7;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

    const labels = { may: "May", jul: "Jul", sep: "Sep", nov: "Nov", jan: "Jan" };
    const data = {
      type: "line",
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false,
          },
          {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false,
          },
          {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false,
          },
          {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false,
          },
          {
            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
            label: "North America",
            borderColor: "#c45850",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "World population per region (in millions)",
        },
      },
    };

    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels: ["May", "Jul", "Jun", "Aug", "Sept", "Nov", "Dec"],
        datasets: [
          {
            data: [500, 200, 245, 105, 304, 180, 279, 221, 450, 300, 1000],
            label: "WBTC",
            borderColor: "#007EAF",
            backgroundColor: "#007EAF",
            tension: 0.4,
            fill: true,
          },
          {
            data: [282, 350, 411, 502, 400, 371, 586, 320, 201, 170],
            label: "USDC",
            borderColor: "#24126A",
            backgroundColor: "#24126A",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        elements: {
          point: {
            radius: 0.1,
            hitRadius: 20,
            hoverRadius: 0,
          },
        },
        plugins: {
          legend: {
            position: "bottom",
            align: "start",
            labels: {
              padding: 35,
              boxWidth: 16,
              boxHeight: 16,
              color: "#24126A",
              font: {
                family: "'Helvetica'",
                size: 16,
              }
            }
          },
        },
      },
    } as ChartConfiguration;

    const ctx = document.getElementById("myChart") as ChartItem;

    this.myChart = new Chart(ctx, config);
  }
}

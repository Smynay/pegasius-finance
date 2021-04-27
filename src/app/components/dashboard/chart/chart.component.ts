import { FocusTrap } from "@angular/cdk/a11y";
import { Component, OnInit } from "@angular/core";
import { Chart, ChartConfiguration, ChartData, ChartItem, ChartOptions, registerables } from "chart.js";
Chart.register(...registerables);

import { TvlHistoryService } from "src/app/services/api/tvl-history.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  myChart;

  constructor(private tvlHistoryService: TvlHistoryService) {}

  async ngOnInit(): Promise<void> {
    function getPreparedDataset(dataArray, key) {
      return {
        data: dataArray.map((e) => e.tvl),
        label: key,
        timestamp: dataArray.map((e) => e.timestamp),
        clearValue: dataArray.map((e) => e.tvl),
      };
    }

    function getChartLables(dataArray) {
      function getFullDateValue(value) {
        const temp = value.toString();
        return temp.length > 1 ? temp : "0" + temp;
      }

      const output = [];

      dataArray.forEach((e) => {
        const date = new Date(+(e.timestamp + "000"));
        const hour = getFullDateValue(date.getHours());
        const datestring = `${hour}:00`;

        output.push(datestring);
      });

      return output;
    }

    const chartData = await this.tvlHistoryService.getHistory();
    let labels;

    const datasets = Object.keys(chartData).map((key) => {
      chartData[key].reverse();

      if (!labels) {
        labels = getChartLables(chartData[key]);
      }

      return getPreparedDataset(chartData[key], key);
    });

    datasets[1].data = datasets[1].data.map((value, index) => value + datasets[0].data[index]);

    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            ...datasets[0],
            borderColor: "#007EAF",
            backgroundColor: "#007EAF",
            tension: 0.4,
            fill: true,
          },
          {
            ...datasets[1],
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
        interaction: {
          mode: "index",
          intersect: false,
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
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const tokenName = context.dataset.label;
                const clearValue = context.dataset.clearValue[context.dataIndex];
                return `${tokenName}: ${clearValue}`;
              },
              title: (context: any) => {
                function getFullDateValue(value) {
                  const temp = value.toString();
                  return temp.length > 1 ? temp : "0" + temp;
                }

                const newContext = context[0];
                let title = newContext.label || "";

                const date = new Date(+(newContext.dataset.timestamp[newContext.dataIndex] + "000"));
                const day = getFullDateValue(date.getDate());
                const month = getFullDateValue(date.getMonth() + 1);

                if (title) {
                  title += ` ${day}.${month}`;
                }

                return title;
              },
            },
          },
        },
      },
    } as ChartConfiguration;

    const ctx = document.getElementById("myChart") as ChartItem;

    this.myChart = new Chart(ctx, config);
  }
}

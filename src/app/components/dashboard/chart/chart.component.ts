import { Component, OnInit } from "@angular/core";
import { Chart, ChartConfiguration, ChartItem, registerables } from "chart.js";

import { TvlHistoryService } from "src/app/services/api/tvl-history.service";
import { PoolsService } from "src/app/services/api/pools.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  myChart;
  tvlToShow = "$52.6B";

  constructor(private tvlHistoryService: TvlHistoryService, private poolsService: PoolsService) {
    Chart.register(...registerables);
  }

  getFullDateValue(dateNumber) {
    const temp = dateNumber.toString();
    return temp.length > 1 ? temp : "0" + temp;
  }

  getPreparedDataset(dataArray, key) {
    return {
      data: dataArray.map((e) => e.tvl),
      label: key,
      timestamp: dataArray.map((e) => e.timestamp),
      clearValue: dataArray.map((e) => e.tvl),
    };
  }

  getChartLables(dataArray) {
    const tempData = dataArray.concat();
    const output = [];

    tempData.reverse();

    tempData.forEach((e) => {
      const date = new Date(+(e.timestamp + "000"));
      const hour = this.getFullDateValue(date.getHours());
      const datestring = `${hour}:00`;

      output.push(datestring);
    });

    return output;
  }

  async ngOnInit(): Promise<void> {
    this.tvlToShow = await this.poolsService.getFormattedTVL();

    const chartData = await this.tvlHistoryService.getHistory();
    const labels = this.getChartLables(chartData[Object.keys(chartData)[0]]);

    const datasets = Object.keys(chartData).map((key) => {
      chartData[key].reverse();
      return this.getPreparedDataset(chartData[key], key);
    });

    // DESCRIPTION: sum charts values only for view
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
            onClick: () => {},
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
                const clearValue = new Intl.NumberFormat("en-US").format(context.dataset.clearValue[context.dataIndex]);
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

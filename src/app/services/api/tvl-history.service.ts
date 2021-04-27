import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TvlHistoryService {
  constructor() {}

  async getHistory() {
    const response = {
      ETH: [
        {
          timestamp: 1619388000,
          tvl: 674,
        },
        {
          timestamp: 1619344800,
          tvl: 684,
        },
        {
          timestamp: 1619301600,
          tvl: 685,
        },
        {
          timestamp: 1619258400,
          tvl: 756,
        },
        {
          timestamp: 1619215200,
          tvl: 795,
        },
        {
          timestamp: 1619344800,
          tvl: 853,
        },
        {
          timestamp: 1619172000,
          tvl: 835,
        },
        {
          timestamp: 1619128800,
          tvl: 841,
        },
        {
          timestamp: 1619085600,
          tvl: 867,
        },
        {
          timestamp: 1619042400,
          tvl: 823,
        },
        {
          timestamp: 1618999200,
          tvl: 745,
        },
        {
          timestamp: 1618956000,
          tvl: 786,
        },
      ],
      USDC: [
        {
          timestamp: 1619388000,
          tvl: 674000,
        },
        {
          timestamp: 1619344800,
          tvl: 612000,
        },
        {
          timestamp: 1619301600,
          tvl: 664000,
        },
        {
          timestamp: 1619258400,
          tvl: 656000,
        },
        {
          timestamp: 1619215200,
          tvl: 715000,
        },
        {
          timestamp: 1619344800,
          tvl: 769000,
        },
        {
          timestamp: 1619172000,
          tvl: 835000,
        },
        {
          timestamp: 1619128800,
          tvl: 841000,
        },
        {
          timestamp: 1619085600,
          tvl: 841000,
        },
        {
          timestamp: 1619042400,
          tvl: 864000,
        },
        {
          timestamp: 1618999200,
          tvl: 853000,
        },
        {
          timestamp: 1618956000,
          tvl: 815000,
        },
      ],
    };

    return response;
  }
}

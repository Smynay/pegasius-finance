import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PoolsService {
  constructor() {}

  async getAll() {
    const response = {
      pools: [
        {
          apy: 12.96,
          "apy-30d": 10.5,
          symbol: "WETH",
          asset: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          tvl: 786,
          icon: "link-to-logo",
        },
        {
          apy: 37.96,
          "apy-30d": 40.5,
          symbol: "USDC",
          asset: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          tvl: 815000,
          icon: "link-to-logo",
        },
      ],
    };

    return response.pools;
  }
}

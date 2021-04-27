import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BalanceService {
  constructor() {}

  async getAll() {
    const response = [
      {
        symbol: "USDC",
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        percentage: 30,
        userholdings: 12521,
      },
      {
        symbol: "WBTC",
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        percentage: 70,
        userholdings: 0.2136734,
      },
    ];

    return response;
  }
}

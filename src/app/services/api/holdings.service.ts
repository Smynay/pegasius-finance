import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HoldingsService {
  constructor() {}

  async getUserHoldings() {
    const response = [
      {
        pool: "ETH",
        shares: 4.613,
        sharePrice: 1.05,
      },
      {
        pool: "USDC",
        shares: 616.53,
        sharePrice: 1.12,
      },
      {
        pool: "Altcoin",
        shares: 1647.15,
        sharePrice: 1.64,
      },
    ];

    return response;
  }
}

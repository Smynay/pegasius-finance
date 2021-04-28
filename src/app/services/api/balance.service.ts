import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BalanceService {
  constructor() {}

  async getAll() {
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
    ];

    return response;
  }
}

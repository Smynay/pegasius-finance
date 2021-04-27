import { Component, Input, OnInit } from "@angular/core";

import { HoldingsService } from "./../../services/api/holdings.service";

@Component({
  selector: "app-altcoins-section",
  templateUrl: "./altcoins-section.component.html",
  styleUrls: ["./altcoins-section.component.scss"],
})
export class AltcoinsSectionComponent implements OnInit {
  tokenIco: string;
  altcoinsInfo: any;

  constructor(private holdingsService: HoldingsService) {
    this.tokenIco = "assets/images/tokens/BTC.svg";
  }

  async ngOnInit(): Promise<void> {
    this.altcoinsInfo = await this.holdingsService.getUserHoldings();
  }
}

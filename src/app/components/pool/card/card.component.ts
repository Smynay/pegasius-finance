import { Component, Input, OnInit } from "@angular/core";

import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-pool-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class PoolCardComponent implements OnInit {
  @Input() poolInfo?: Pool;

  tokenIco: string;

  constructor() {
    this.tokenIco = this.poolInfo?.icon || "assets/images/tokens/BTC.svg";
  }

  ngOnInit(): void {}
}

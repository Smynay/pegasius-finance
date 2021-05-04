import { Component, Input, OnInit } from "@angular/core";

import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-action-form",
  templateUrl: "./action-form.component.html",
  styleUrls: ["./action-form.component.scss"],
})
export class ActionFormComponent implements OnInit {
  @Input() title = "Deposit";

  @Input() poolInfo?: Pool;

  tokenIco: string;

  constructor() {}

  ngOnInit(): void {
    this.tokenIco = this.poolInfo?.icon || "assets/images/tokens/BTC.svg";
  }
}

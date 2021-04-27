import { Component, Input, OnInit } from "@angular/core";
import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() poolInfo: Pool;

  tokenIco: string;

  constructor() {
    this.tokenIco = "assets/images/tokens/BTC.svg";
  }

  ngOnInit(): void {}
}

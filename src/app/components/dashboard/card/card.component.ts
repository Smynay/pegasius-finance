import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() poolInfo = { tokenIco: "assets/images/tokens/BTC.svg" };

  tokenIco: string;

  constructor() {
    this.tokenIco = this.poolInfo?.tokenIco;
  }

  ngOnInit(): void {}
}

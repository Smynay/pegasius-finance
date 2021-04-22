import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-card",
  templateUrl: "./simple-card.component.html",
  styleUrls: ["./simple-card.component.scss"],
})
export class SimpleCardComponent implements OnInit {
  @Input() poolInfo = { tokenIco: "assets/images/tokens/BTC.svg" };
  @Input() decoreImg = "../../../assets/images/decore/2.svg";

  imgStyle = {};

  tokenIco: string;

  constructor() {
    this.tokenIco = this.poolInfo?.tokenIco;
  }

  ngOnInit(): void {
    this.imgStyle = {
      background: `url('../../../${this.decoreImg}') #fff`,
      "background-color": "#fff",
      "background-size": "contain",
      "background-position": "right 50px",
      "background-repeat": "no-repeat",
    };
  }
}

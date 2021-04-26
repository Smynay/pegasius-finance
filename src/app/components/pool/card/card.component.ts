import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PoolCardComponent implements OnInit {
  @Input() poolInfo = { tokenIco: "assets/images/tokens/BTC.svg" };

  tokenIco: string;

  constructor() {
    this.tokenIco = this.poolInfo?.tokenIco;
  }

  ngOnInit(): void {
  }

}

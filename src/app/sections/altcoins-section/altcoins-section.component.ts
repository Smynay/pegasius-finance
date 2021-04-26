import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-altcoins-section',
  templateUrl: './altcoins-section.component.html',
  styleUrls: ['./altcoins-section.component.scss']
})
export class AltcoinsSectionComponent implements OnInit {

  @Input() poolInfo = { tokenIco: "assets/images/tokens/BTC.svg" };

  tokenIco: string;

  constructor() {
    this.tokenIco = this.poolInfo?.tokenIco;
  }

  ngOnInit(): void {
  }

}

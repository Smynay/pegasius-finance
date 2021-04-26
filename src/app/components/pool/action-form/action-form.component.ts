import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent implements OnInit {
  @Input() title = "Deposit";

  @Input() poolInfo = { tokenIco: "assets/images/tokens/BTC.svg" };

  tokenIco: string;

  constructor() {
    this.tokenIco = this.poolInfo?.tokenIco;
  }

  ngOnInit(): void {
  }

}

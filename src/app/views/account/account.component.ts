import { Component, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
  }

}

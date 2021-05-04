import { AfterViewInit, Component, OnInit } from "@angular/core";

import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: "app-pool",
  templateUrl: "./pool.component.html",
  styleUrls: ["./pool.component.scss"],
})
export class PoolComponent implements AfterViewInit {
  constructor(public menuService: MenuService) {}

  ngAfterViewInit(): void {
    document.querySelector("#pool-form").scrollIntoView({
      block: "start",
    });
  }
}

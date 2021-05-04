import { Component, OnInit } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";
import * as AOS from "aos";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit() {
    AOS.init({ scrollContainer: ".content__box" });
  }

  refreshAOS() {
    AOS.refresh();
  }
}

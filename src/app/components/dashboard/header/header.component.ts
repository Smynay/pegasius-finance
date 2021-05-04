import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: "app-dashboard-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class DashboardHeaderComponent implements OnInit {
  logo = "assets/images/logo/logo.png";
  logoText = "assets/images/logo/logo_text-dark.png";

  languages = [
    { locale: "EN", title: "English" },
    { locale: "FR", title: "France" },
  ];

  backProps = {
    dashboard: {
      link: "/",
      title: "BACK TO HOME PAGE",
    },
    pool: {
      link: "/dashboard",
      title: "BACK TO DASHBOARD",
    },
  };

  page: string;

  @Output() burgerClick = new EventEmitter();

  constructor(public menuService: MenuService, private activatedRoute: ActivatedRoute) {
    this.page = this.activatedRoute.snapshot.routeConfig.path;
  }

  ngOnInit(): void {}

  emitBurgerClick() {
    this.burgerClick.emit(null);
  }
}

import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: "app-dashboard-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class DashboardHeaderComponent implements OnInit {
  logo = "assets/images/logo/logo.svg";
  logoText = "assets/images/logo/logo_text-dark.svg";

  languages = [
    { locale: "EN", title: "English" },
    { locale: "FR", title: "France" },
  ];

  @Output() burgerClick = new EventEmitter();

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  emitBurgerClick() {
    this.burgerClick.emit(null);
  }
}

import { MenuService } from "./services/menu.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "pegasus-finance";

  constructor(public menuService: MenuService) {}
}

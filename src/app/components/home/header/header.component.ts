import { MenuService } from "../../../services/menu.service";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  logo = "assets/images/logo/logo.png";
  logoText = "assets/images/logo/logo_text.png";

  @Output() burgerClick = new EventEmitter();

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  emitBurgerClick() {
    this.burgerClick.emit(null);
  }

  scrollTo($event, href) {
    $event.preventDefault();

    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  logo = "assets/images/logo/logo.svg";
  logoText = "assets/images/logo/logo_text.svg";

  constructor() {}

  ngOnInit(): void {}
}

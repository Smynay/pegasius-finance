import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-section",
  templateUrl: "./main-section.component.html",
  styleUrls: ["./main-section.component.scss"],
})
export class MainSectionComponent implements OnInit {
  mainSectionImage = "assets/images/content/1.svg";

  constructor() {}

  ngOnInit(): void {}
}

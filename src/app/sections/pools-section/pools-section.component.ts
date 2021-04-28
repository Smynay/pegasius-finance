import { Component, OnInit } from "@angular/core";
import { NgwWowService } from "ngx-wow";

@Component({
  selector: "app-pools-section",
  templateUrl: "./pools-section.component.html",
  styleUrls: ["./pools-section.component.scss"],
})
export class PoolsSectionComponent implements OnInit {
  customDecoreImg = "assets/images/decore/3.svg";

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {}
}

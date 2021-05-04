import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-partners-section",
  templateUrl: "./partners-section.component.html",
  styleUrls: ["./partners-section.component.scss"],
})
export class PartnersSectionComponent implements OnInit {
  partners = [
    {
      name: "haechiAudit",
      darkImg: "../../../assets/images/logo/haechi.png",
      lightImg: "../../../assets/images/logo/haechi_light.png",
      link: "https://google.com",
    },
    {
      name: "uniswap",
      darkImg: "../../../assets/images/logo/uniswap.png",
      lightImg: "../../../assets/images/logo/uniswap_light.png",
      link: "",
    },
    {
      name: "consensys",
      darkImg: "../../../assets/images/logo/consensys.png",
      lightImg: "../../../assets/images/logo/consensys_light.png",
      link: "",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

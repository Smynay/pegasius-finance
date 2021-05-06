import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"],
})
export class PopupComponent implements OnInit {
  @Input() popupParams = {
    type: "info",
    text: "Ahtung!!!",
    link: null,
  };

  icon: string;
  color: string;
  infoMessage: string;

  constructor() {
    switch (this.popupParams.type) {
      case "warning":
        this.icon = "error";
        this.color = "red";
        this.infoMessage = "TRANSACTION WAS REJECTED";
        this.popupParams.text = "";
        break;

      case "success":
        this.icon = "check_circle";
        this.color = "green";
        this.infoMessage = "TRANSACTION CONFIRMED";
        this.popupParams.text = "Transaction succesfuly confirmed!";
        break;

      case "info":
        this.icon = "update";
        this.color = "blue";
        this.infoMessage = "WAITING FOR CONFIRMATION";
        this.popupParams.text = "Please confirm the popped up transaction...";
        break;

      default:
        this.icon = "info";
        this.color = "blue";
        this.infoMessage = "INFO MESSAGE";
    }
  }

  ngOnInit(): void {}

  closeModal() {}
}

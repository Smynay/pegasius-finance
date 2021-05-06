import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent implements OnInit {
  @Input() snackbarParams = {
    type: "warning",
    text: "Ahtung!!!",
    link: null,
  };

  icon: string;
  color: string;

  constructor() {
    switch (this.snackbarParams.type) {
      case "warning":
        this.icon = "warning";
        this.color = "red";
        break;

      case "success":
        this.icon = "check_circle";
        this.color = "green";
        break;

      case "info":
        this.icon = "update";
        this.color = "blue";
        break;

      default:
        this.icon = "info";
        this.color = "blue";
    }
  }

  ngOnInit(): void {}

  closeSnackbar() {}
}

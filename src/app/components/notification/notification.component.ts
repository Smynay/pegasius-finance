import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent implements OnInit {
  @Input() notificationParams = {
    type: "warning",
    text: "Ahtung!!!",
    link: null,
  };

  icon: string;
  color: string;

  constructor() {
    switch (this.notificationParams.type) {
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
}

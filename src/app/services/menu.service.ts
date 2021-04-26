import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  homeMenu = [
    { title: "POOLS", path: "#" },
    { title: "ABOUT", path: "#" },
    { title: "PARTNERS", path: "#" },
    { title: "BLOG", path: "#" },
  ];

  dashboardMenu = [
    { title: "BACK TO HOME", path: "/" }
  ];

  poolMenu = this.dashboardMenu;

  constructor() {}
}

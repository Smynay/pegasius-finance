import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  menu = [
    { title: "POOLS", path: "#" },
    { title: "ABOUT", path: "#" },
    { title: "PARTNERS", path: "#" },
    { title: "BLOG", path: "#" },
  ];

  constructor() {}
}

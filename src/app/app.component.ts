import { Component } from "@angular/core";

import { Route } from "./interfaces/route";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  routes: Route[] = [
    { link: "dashboard", label: "Dashboard" },
    { link: "sign-in", label: "Sign In" }
  ];
}

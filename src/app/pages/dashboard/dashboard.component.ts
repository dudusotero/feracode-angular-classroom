import { Component } from "@angular/core";
import { Employee } from "src/app/interfaces/employee";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
  public selectedEmployee: Employee;

  constructor() {}

  setSelectedEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }
}

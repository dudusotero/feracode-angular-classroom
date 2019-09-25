import { Component, ViewChild } from "@angular/core";
import { Employee } from "src/app/interfaces/employee";
import { EmployeesListComponent } from "src/app/components/employees-list/employees-list.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
  public selectedEmployee: Employee;

  @ViewChild("employeesList", { static: false })
  employeesList: EmployeesListComponent;

  constructor() {}

  setSelectedEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  refreshEmployeesListChild(): void {
    this.employeesList.refreshEmployeesList();
  }
}

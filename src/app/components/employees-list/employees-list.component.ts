import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "src/app/interfaces/employee";

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.scss"]
})
export class EmployeesListComponent implements OnInit {
  public employees: Employee[];

  @Output()
  private selectedEmployee: EventEmitter<Employee> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    const observable = this.httpClient
      .get("http://localhost:3000/employees")
      .subscribe((res: Employee[]) => {
        this.employees = res;
        observable.unsubscribe();
      });
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployee.emit(employee);
  }
}

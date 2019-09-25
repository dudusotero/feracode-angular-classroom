import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { Employee } from "src/app/interfaces/employee";
import { EmployeesService } from "src/app/services/employees.service";

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.scss"],
  animations: [
    trigger("appear", [
      state("hide", style({ opacity: 0 })),
      state("show", style({ opacity: 1 })),
      transition("hide => show", [animate("0.8s")])
    ]),
    trigger("selectedDeselected", [
      state(
        "selected",
        style({
          paddingLeft: 16
        })
      ),
      state(
        "deselected",
        style({
          paddingLeft: 0
        })
      ),
      transition("selected => deselected", [animate("0.2s")]),
      transition("deselected => selected", [animate("0.6s")])
    ])
  ]
})
export class EmployeesListComponent implements OnInit {
  public employees: Employee[];
  public selected: Employee;
  public loadingEmployees: boolean;

  @Output()
  private selectedEmployee: EventEmitter<Employee> = new EventEmitter();

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.loadingEmployees = true;
    const observable = this.employeesService
      .getEmployees()
      .subscribe((res: Employee[]) => {
        this.employees = res;
        if (this.employees.length) {
          const [employee] = this.employees;
          this.selectEmployee(employee);
        }
        this.loadingEmployees = false;
        observable.unsubscribe();
      });
  }

  selectEmployee(employee: Employee): void {
    this.selected = employee;
    this.selectedEmployee.emit(employee);
  }

  refreshEmployeesList(): void {
    this.getEmployees();
  }
}

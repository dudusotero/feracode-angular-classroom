import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { EmployeesListModule } from "src/app/components/employees-list/employees-list.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, EmployeesListModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}

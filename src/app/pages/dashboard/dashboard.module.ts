import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { EmployeesListModule } from "src/app/components/employees-list/employees-list.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, EmployeesListModule, MatButtonModule, MatIconModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}

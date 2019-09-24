import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { EmployeesListComponent } from "./employees-list.component";

@NgModule({
  declarations: [EmployeesListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [EmployeesListComponent]
})
export class EmployeesListModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { EmployeesListComponent } from "./employees-list.component";

@NgModule({
  declarations: [EmployeesListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  exports: [EmployeesListComponent]
})
export class EmployeesListModule {}

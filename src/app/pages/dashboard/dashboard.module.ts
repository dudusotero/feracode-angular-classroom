import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { InputModule } from "src/app/components/input/input.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, InputModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}

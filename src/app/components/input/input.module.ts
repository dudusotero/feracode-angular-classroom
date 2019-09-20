import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { InputComponent } from "./input.component";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule, MatIconModule],
  exports: [InputComponent]
})
export class InputModule {}

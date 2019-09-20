import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

import { SignInFormComponent } from "./sign-in-form.component";
import { InputModule } from "../../../components/input/input.module";

@NgModule({
  declarations: [SignInFormComponent],
  imports: [CommonModule, FormsModule, InputModule, MatButtonModule],
  exports: [SignInFormComponent]
})
export class SignInFormModule {}

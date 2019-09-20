import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { SignInComponent } from "./sign-in.component";
import { SignInFormModule } from "./sign-in-form/sign-in-form.module";

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInFormModule, MatCardModule],
  exports: [SignInComponent]
})
export class SignInModule {}

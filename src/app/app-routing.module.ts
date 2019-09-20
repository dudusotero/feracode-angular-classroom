import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { NotFoundModule } from "./pages/not-found/not-found.module";
import { SignInModule } from "./pages/sign-in/sign-in.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "sign-in", component: SignInComponent },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardModule,
    NotFoundModule,
    SignInModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

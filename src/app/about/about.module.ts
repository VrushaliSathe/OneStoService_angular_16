import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about.component";
import { LoginComponent } from "../login/login.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "About",
      urls: [{ title: "About", url: "/login" }, { title: "About" }],
    },

    component: AboutComponent,
  },
  {
    path: "",
    data: {
      title: "login",
      urls: [{ title: "login", url: "/login" }, { title: "login" }],
    },

    component: LoginComponent,
  },

];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
})
export class AboutModule {}

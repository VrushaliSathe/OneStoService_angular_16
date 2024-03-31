import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { OtpregisterComponent } from './login/otpregister/otpregister.component';
import { ForgotpassComponent } from './login/forgotpass/forgotpass.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthGuard } from './auth.guard';

export const Approutes: Routes = [
  {
   path : ""   ,
  //  redirectTo: 'login',
   pathMatch: 'full',
   component: LoginComponent
  },
  {
    path : "register" , component: RegisterComponent
   },
   {
    path : "forgotpass" , component: ForgotpassComponent
   },
   {
    path : "otpregister" , component: OtpregisterComponent
   },
   {
    path : "profile" , component: ProfileComponent
   },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

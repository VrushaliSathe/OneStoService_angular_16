import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgotpassComponent } from './login/forgotpass/forgotpass.component';
import { OtpregisterComponent } from './login/otpregister/otpregister.component';

import { AuthServiceService } from './component/services/auth-service.service';
import { NgOtpInputModule } from 'ng-otp-input';
// import { AuthInterceptor } from './auth.interceptor';
import { TokenService } from './token.service';


import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent,
    OtpregisterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    NgOtpInputModule,
  ],
  providers: [
    AuthServiceService,
    // ToastrService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

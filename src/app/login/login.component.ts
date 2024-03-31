import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../component/services/auth-service.service';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
// import { NotificationService } from '../component/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //Form variables
  loginForm: any = FormGroup;
  submitted = false;
  isLoading = false;
  error: any;
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private http: HttpClient,
    private authenticationservice: AuthServiceService
  ) // private notifyService: NotificationService
  {}
  //Add user form actions
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    var formData: any = new FormData();
    formData.append('email', this.loginForm.value.email);
    formData.append('password', this.loginForm.value.password);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    this.authenticationservice.login(formData);
    console.log(environment.currentToken,"jkjkjkj")

    if(localStorage.getItem(environment.currentToken)!==null){
      console.log(environment.currentToken,"jkjkjkj")
      this.router.navigate(['dashboard'])
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
          ),
        ],
      ],
      // for the checkbox
      // acceptTerms: [false, Validators.requiredTrue],
    });

  }

  // login(data:any){
  //   this.http.post(this.apiUrl + 'login',data,{observe:'response'})
  //    .subscribe((response)=>{
  //     this.response = response;
  //     console.log("response",this.response)
  //     if(this.response.body.error_code == "200"){
  //       console.log("login")
  //       this.toastr.success(this.response.body.message);
  //       this.isLogIn.next(true);
  //       localStorage.setItem(environment.currentToken, this.response.body.token);
  //       this.router.navigate(['dashboard'])
  //     }else{
  //       console.warn("user Log Fail")
  //       this.isLoginError.emit(true)
  //     }
  //    }
  //    );
  // }
}

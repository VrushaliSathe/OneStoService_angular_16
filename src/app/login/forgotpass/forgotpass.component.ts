import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from './Validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent {
  retrivePassword:any = FormGroup;
  submitted = false;


  constructor( private formBuilder: FormBuilder ,public router:Router){}
  //Add user form actions
  get f() { return this.retrivePassword.controls; }
  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.retrivePassword.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Great!!");
      this.router.navigateByUrl("/")
    }

  }
    ngOnInit() {
      //Add User form validations
      this.retrivePassword = this.formBuilder.group({
        password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$') ]],
        confirmpassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$') ]]
      },
      // {
      //   validators: [Validators.match('password', 'confirmpassword')],
      // }
      );

    }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
//Form variables
registerForm:any = FormGroup;
submitted = false;
constructor( private formBuilder: FormBuilder, public routes:Router){}
//Add user form actions
get f() { return this.registerForm.controls; }
onSubmit() {

  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {

    alert("Register SuucessFully!!");
   this.routes.navigateByUrl('/otpregister');
  }

}
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required , Validators.pattern( '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]],
    contactnumber: ['' , [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    acceptTerms: [false, Validators.requiredTrue],
    });
  }
}

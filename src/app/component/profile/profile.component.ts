import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileForm: any = FormGroup;
  submitted = false;
  profile: any;
  admindata: any;
  active = 1;
  firstName: any;
  lastName: any;
  email: any;
  id: any;
  flag: boolean = true;
  password:any
  oldPassword:any
  editAdmin: any = { firstName: '', lastName: '', email: '', password: '' };
  updatepass: any = { oldPassword: '', password: '', confirmPassword: '' };
  text: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.http.get(environment.apiKey + '/getAdmin').subscribe((data) => {
      this.profile = data;
      this.admindata = this.profile.admin[0];
      this.id = this.admindata._id;
      console.log('this.profile', this.admindata, data, this.id);
      if ((this.profile.errorCode = '200')) {
        this.editAdmin = {
          firstName: this.admindata.firstName,
          lastName: this.admindata.lastName,
          email: this.admindata.email,
          password: this.admindata.password,

        };
      }
      console.log('editAdmin', this.editAdmin);
    });

    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.requiredTrue],
      lastName: ['', Validators.requiredTrue],
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required , Validators.pattern( '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', Validators.requiredTrue],
      oldPassword: ['', Validators.requiredTrue],
      confirmPassword: ['', [Validators.required, ]],
    });

  }

  updateAdmin(data:any) {

    var formData: any = new FormData();
    formData.append('firstName', this.editAdmin.firstName);
    formData.append('lastName', this.editAdmin.lastName);
    formData.append('email', this.editAdmin.email);
    var formData1: any = new FormData();

    formData1.append('password', this.profileForm.password);
    formData1.append('oldPassword', this.profileForm.oldPassword);
    formData1.append('confirmPassword', this.profileForm.confirmPassword);
    console.log('event', data,this.profileForm.confirmPassword);

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }

    this.http
      .put(environment.apiUrl + `update/${this.id}`, formData, {
        observe: 'response',
      })
      .subscribe((res) => {
        console.log('admin update', res);
      });
    if (this.active == 2) {
      this.updatePassword();
    }
  }

  get f(): any {
    return this.profileForm.controls;
  }
  updatePassword() {
    this.submitted=true
    var formData: any = new FormData();
    if(this.profileForm.invalid){
      return;
    }
    else{
      formData.append('password',this.profileForm.value.password);
      formData.append('oldPassword', this.profileForm.value.oldPassword);
      formData.append('confirmPassword',this.profileForm.value.confirmPassword);

      this.http
        .put(environment.apiUrl + `update/password/${this.id}`, formData, {
          observe: 'response',
        })
        .subscribe((res) => {
          this.editAdmin = res;
          if (this.editAdmin.body.errorCode == '200') {
            alert(this.editAdmin.body.message);
          }

        });
    }

  }

  keyup(value: any) {
    this.text = value;
    console.log("this.text",this.text)
  }
}

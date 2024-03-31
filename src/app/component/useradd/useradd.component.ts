import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { environment } from 'src/environments/environment';
import { NgFor } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { NotificationService } from '../services/notification.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.scss'],
})
export class UseraddComponent {
  alerts = [
    {
      type: 'success',
      message: 'This is an success alert',
    },
    {
      type: 'info',
      message: 'This is an info alert',
    },
    {
      type: 'warning',
      message: 'This is a warning alert',
    },
    {
      type: 'danger',
      message: 'This is a danger alert',
    },
    {
      type: 'primary',
      message: 'This is a primary alert',
    },
    {
      type: 'secondary',
      message: 'This is a secondary alert',
    },
    {
      type: 'light',
      message: 'This is a light alert',
    },
    {
      type: 'dark',
      message: 'This is a dark alert',
    },
  ];
  page = 3;
  closeResult = '';
  showmsg: boolean = false;
  // url = 'https://demo5.testingsites.in/getallemployee';
  employeList: any;
  employeeForm: any = FormGroup;
  deleteId: any;
  editid: any;
  contentlg: any;
  loginsuccess: any;
  editoneemploye: any = {
    employeeId: '',
    name: '',
    mobile: '',
  };
  editemploye: any;
 submitted : boolean=false;


  constructor(
    private modalService: NgbModal,
    private employeservice: EmployeeService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) // private notify: NotificationService
  {
    // this.employeservice.getEmployeeList();
    this.getEmployeeList1();
    console.log('emplist', this.employeservice.dataList);
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(this.alerts);
  }
  get f(): any {
    return this.employeeForm.controls;
  }
  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  getEmployeeList1() {
    this.http.get(environment.apiKey + '/getallemployee', {}).subscribe(
      (response: any) => {
        this.alerts.slice(1);
        this.employeList = response.employees;
        this.editid=this.employeList[0]._id
        console.log('employeList', this.employeList, response, this.editid);
      },
      (error: any) => console.log(error)
    );
  }
  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }
  onSubmit() {
    this.submitted=true;
    var formData: any = new FormData();
    if(this.employeeForm.invalid){
      return;
    }
    else{
      formData.append('employeeId', this.employeeForm.value.employeeId);
      formData.append('name', this.employeeForm.value.name);
      formData.append('mobile', this.employeeForm.value.mobile);
      formData.append('password', this.employeeForm.value.password);
      console.log('employeeForm', this.employeeForm.value);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      this.employeservice.addEmployee(formData);
    }

  }
  onEditClick(id: any) {
    this.editid = id;
    // this.onImageClick(this.editid)
    var formData: any = new FormData();
    formData.append('_id', this.editid);

    // this.http.get(environment.apiKey + '/getemployee/' + this.editid,{}).subscribe(
    //   (response:any) => {
    //     console.log("one employe",response)
    //     this.employeeForm={
    //       employeeId: response.data.employeeId,
    //       name:response.data.name,
    //       mobile:response.data.mobile,
    //       password: response.data.password,
    //     }
    //   },
    //   (error) => console.log(error)
    // )
    // this.onEditEmploye();
  }

  onDelete(id: any) {
    this.deleteId = id;
    var formData: any = new FormData();
    formData.append('_id', this.deleteId);
    console.log('delete id', this.deleteId);
    this.employeservice.onDeleteEmploye(this.deleteId);
  }
  openLgmodel(addEmployee: any) {
    this.modalService.open(addEmployee, { size: 'lg' });
  }
  // get update api
  onEditModel(editemploye: any) {

    this.modalService.open(editemploye, { size: 'lg' });
    this.http
      .get(environment.apiKey + `/getemployee/${this.editid}`, {})
      .subscribe(
        (response: any) => {
          this.editemploye = response.employees[0];
          this.editid = this.editemploye._id;
          if (response.errorCode == '200') {
            this.editoneemploye = {
              employeeId: this.editemploye.employeeId,
              name: this.editemploye.name,
              mobile: this.editemploye.mobile,
              password: this.editemploye.password,
            };
          }
        },
        (error: any) => console.log(error)
      );
  }
  // update api
  onEditEmploye() {
    this.submitted=true;
    if (this.editid != '') {
        var formData: any = new FormData();
        formData.append('employeeId', this.editoneemploye.employeeId);
        formData.append('name', this.editoneemploye.name);
        formData.append('password', this.editoneemploye.password);
        formData.append('mobile', this.editoneemploye.mobile);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.employeservice.editEmploye(formData, this.editid);
      }
  }
}

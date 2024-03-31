import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomerService } from '../services/customer.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
// import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-reportservice',
  templateUrl: './reportservice.component.html',
  styleUrls: ['./reportservice.component.scss'],
})
export class ReportserviceComponent {
  page = 4;
  selected = 'none';
  closeResult = '';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  customers: any;
  customerForm: any = FormGroup;
  deleteId: any;
  editid: any;

  editcustomer: any = {
    name: '',
    mobile: '',
  };
  employeetype = [
    { value: '0', viewValue: 'AMC' },
    { value: '1', viewValue: 'DO & Change' },
    { value: '2', viewValue: 'Installation & Commistion' },
  ];
  selectedsevice: string='';
  data: any;
  custId: any;
  employeAmc= { name: "", mobile: "", id:""};
  static idChange: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  submitted: boolean=false;

  constructor(
    private modalService: NgbModal,
    private customerservice: CustomerService,
    private http: HttpClient,
    private formbuilder: FormBuilder,

  ) //
  {

    this.http.get(environment.apiKey + '/getAllCustomer').subscribe((res: any) => {
      this.customers = res.customers;
      // this.customers.forEach((element: any) => {
        this.editid=this.customers._id
        console.log("this.editid",this.editid,res.customers._id)
      // });

    });
  }

  onFoodSelection1() {
    console.log('this.employeetype.values', this.employeetype.values);

    let selectedsevice = event;
    if (this.selectedsevice === '0') {
      // this is get all amc employees
      console.log('selected 0', this.selectedsevice);
      this.http.get(environment.apiKey + '/getallamc', {}).subscribe(
        (response: any) => {
          this.data = response.amc[0].employee;
          this.custId = this.data._id;
          this.employeAmc = {
            name: this.data.name,
            mobile: this.data.mobile,
            id:this.data._id
          };
          console.log('employeAmc', this.data.name, response);
        },
        (error: any) => console.log(error)
      );
    } else if (this.selectedsevice === '1') {
      console.log('selected 1', this.selectedsevice);
      // this is get all docharge employee
      this.http.get(environment.apiKey + '/getAllDnc', {}).subscribe(
        (response: any) => {
          this.data = response.dac[0].employee;
          this.custId = this.data._id;
          //   dont have employee object
          this.employeAmc = {
            name: this.data.name,
            mobile: this.data.mobile,
            id: this.data._id
          };
          console.log('employeAlldoAndChange', this.data, response);
        },
        (error: any) => console.log(error)
      );
    } else if (this.selectedsevice === '2') {
      console.log('selected 2', this.selectedsevice);
    }

  }
  ngOnInit() {
    this.customerForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
    });
    console.log('selected 2', this.selectedsevice);
    // send selected flag in amctaskemployee component
    this.customerservice.selectedsevice.next(this.selectedsevice);

  }
  get f(): any {
    return this.customerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    var formData: any = new FormData();
    if(this.customerForm.invalid){
      return;
    }
    else{
      formData.append('name', this.customerForm.value.name);
      formData.append('mobile', this.customerForm.value.mobile);
      this.customerservice.addCustomer(formData);
    }


  }
  onDelete(id: any) {
    this.deleteId = id;
    var formData: any = new FormData();
    formData.append('_id', this.deleteId);
    console.log('delete id', this.deleteId);
    this.customerservice.onDeleteCustomer(this.deleteId);
  }

  editCustomerModel(editCoustomer: any) {
    console.log(this.editcustomer, this.editid);
    this.modalService.open(editCoustomer, { size: 'lg' });
    this.http
      .get(environment.apiKey + `/getcustomer/${this.editid}`, {})
      .subscribe(
        (response: any) => {
          this.editcustomer = response.customers;
          this.editid = this.editcustomer._id;
          console.log(this.editcustomer, this.editid);
          if (response.errorCode == '200') {
            this.editcustomer = {
              name: this.editcustomer.name,
              mobile: this.editcustomer.mobile,
            };
          }
          else{
             alert(response.message)
          }
        },
        (error: any) => console.log(error)
      );
  }
  // updateCustomer/
  onEditCustomer() {
    this.submitted=true;
    if(this.customerForm.invalid){
      return;
    }
    else{
      if (this.editid != '') {
        var formData: any = new FormData();
        formData.append('name', this.editcustomer.name);
        formData.append('mobile', this.editcustomer.mobile);
        console.log(
          'customer',
          this.editcustomer.name,
          this.editcustomer.mobile,
          this.editid
        );
        console.log('customer', formData, this.editid);
        this.customerservice.editCustomer(formData, this.editid);
      }
    }

  }

  addCustomerModel(addCoustomer: any) {
    this.modalService.open(addCoustomer, { size: 'lg' });
  }
}

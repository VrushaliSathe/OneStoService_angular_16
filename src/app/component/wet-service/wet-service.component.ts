import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wet-service',
  templateUrl: './wet-service.component.html',
  styleUrls: ['./wet-service.component.scss'],
})
export class WetServiceComponent {
  page = 3;
  selected = 'none';

  closeResult = '';

  version = VERSION;

  selectedsevice: string = '';
  selectedFood2: string = '';
  custId: any;
  employeetype = [
    { value: '0', viewValue: 'AMC' },
    { value: '1', viewValue: 'DO & Change' },
    { value: '2', viewValue: 'Installation & Commistion' },
  ];
  data: any;
  employeAmc: any = {
    name: '',
    mobile: '',
  };
  employeAlldoAndChangeData: any;
  constructor(
    private modalService: NgbModal,
    private route: Router,
    private http: HttpClient
  ) {}
  onFoodSelection1() {
    console.log('this.employeetype.values', this.employeetype.values);

    let selectedsevice = event;
    if (this.selectedsevice === '0') {
      // this is get all amc employees
      console.log('selected 0', this.selectedsevice);
      this.http.get(environment.apiKey + '/getallamc', {}).subscribe(
        (response: any) => {
          console.log('employeAmc', this.data.name, response);

          this.data = response.amc[0].employee;
          this.custId = this.data._id;
          this.employeAmc = {
            name: this.data.name,
            mobile: this.data.mobile,
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
          console.log('employeAlldoAndChange', this.data, response);
          this.data = response.dac[0].employee;
          this.custId = this.data._id;
          //   dont have employee object
          this.employeAmc = {
            name: this.data.name,
            mobile: this.data.mobile,
          };
          console.log('employeAlldoAndChange', this.data, response);
        },
        (error: any) => console.log(error)
      );
    } else if (this.selectedsevice === '2') {
      console.log('selected 2', this.selectedsevice);
    }
  }
  getCustId(id: any) {
    this.route.navigateByUrl('/component/employetask/' + this.custId);
  }
  employeAlldoAndChange() {
    this.http.get(environment.apiKey + '/getAllDnc', {}).subscribe(
      (response: any) => {
        this.employeAlldoAndChangeData = response.dac[0];
        console.log(
          'employeAlldoAndChange',
          this.employeAlldoAndChangeData,
          response
        );
      },
      (error: any) => console.log(error)
    );
  }

  employeInNC() {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

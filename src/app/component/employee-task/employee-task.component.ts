import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-task',
  templateUrl: './employee-task.component.html',
  styleUrls: ['./employee-task.component.scss'],
})
export class EmployeeTaskComponent {
  selected: any;
  selected2: any;
  selected3: any;
  page = 12;
  closeResult = '';
  range = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
    startTime: new FormControl(),
    endTime: new FormControl(),
  });
  customers: any;
  userId: any;
  id: string = '';

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
	private router:Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.userId = this.activatedRoute.snapshot.params._id
  }
  ngOnInit() {
    this.userId = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      console.log(this.userId); //log the entire params object
      console.log('data', params['id']); //log the value of id
      this.http
        .get(environment.apiKey + `/getEmpCustomer/${this.userId}`)
        .subscribe((res: any) => {
          this.customers = res.customers ;
          console.log('dataList customer', this.customers);
        });
    });
  }
getCustomerId(id:any){
	console.log('dataList id',id);
	this.router.navigateByUrl("/component/alltasks/" + id)
}
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

  onSubmit() {
    const a = this.range.controls['startDate'].value
      .toISOString()
      .split('T')[0];
    const b = this.range.controls['startTime'].value
      .toISOString()
      .split('T')[1];

    console.log('******', a + b);
  }

  periodWise() {}
}

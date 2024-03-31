import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dry-service',
  templateUrl: './dry-service.component.html',
  styleUrls: ['./dry-service.component.scss'],
})
export class DryServiceComponent {
  page = 5;
  closeResult = '';
  userId: any;
  taskListAmc: any;
  isValid:boolean = false;
  other_content:any;
  data: any;
  taskListAmc1:any;
  constructor(
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.userId = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      console.log(this.userId); //log the entire params object
      console.log('data', params['id']); //log the value of id
      this.http
      .get(environment.apiKey + `/getAllAmc`)
      .subscribe((res: any) => {
      if(res.errorCode == '200'){
        this.data = res.amc;
        this.taskListAmc=Object(this.data)
         this.data= Object(this.taskListAmc)
         this.taskListAmc1= this.data[0].refrigerant[0]
      console.log("service task amc",this.taskListAmc,this.taskListAmc1); //log the entire params object

      }
      else{
        alert(res.message);
      }


        });
    });
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
}

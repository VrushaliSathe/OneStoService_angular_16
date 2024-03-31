import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-servicevedio',
  templateUrl: './servicevedio.component.html',
  styleUrls: ['./servicevedio.component.scss']
})
export class ServicevedioComponent {

  page=12;


selected = 'option2';
  closeResult = '';


  constructor(private modalService: NgbModal) {}
  // POP UP Model
    open(content: any) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
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



  openLgmodel(contentimage: any) {
    this.modalService.open(contentimage, { size: 'lg' });
  }

  }







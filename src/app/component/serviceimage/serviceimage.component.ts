import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-serviceimage',
  templateUrl: './serviceimage.component.html',
  styleUrls: ['./serviceimage.component.scss']
})
export class ServiceimageComponent {
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


  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  name = 'Angular 6';
  htmlContent = "Lorem Ipsum is simply dummy text ";


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  openLgmodel(contentimage: any) {
    this.modalService.open(contentimage, { size: 'lg' });
  }


}


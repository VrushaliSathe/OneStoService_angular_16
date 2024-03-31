import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-servicecomplaint',
  templateUrl: './servicecomplaint.component.html',
  styleUrls: ['./servicecomplaint.component.scss']
})
export class ServicecomplaintComponent {

  page = 4;
  selected = 'option2';
    closeResult = '';


    constructor(private modalService: NgbModal) {}
  // POP UP Model

  issueresolved(){
    window.location.reload();
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
    openLgmodel(contentlg: any) {
      this.modalService.open(contentlg, { size: 'lg' });
    }

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
}

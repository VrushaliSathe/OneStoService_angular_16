import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-termcondition',
  templateUrl: './termcondition.component.html',
  styleUrls: ['./termcondition.component.scss']
})
export class TermconditionComponent {
  name = 'Angular 6';
  htmlContent = '';
  editorConfig: AngularEditorConfig={}

      ngOnInit(){
        this.editorConfig = {
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
      }
}

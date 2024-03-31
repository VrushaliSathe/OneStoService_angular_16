import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicereport',
  templateUrl: './servicereport.component.html',
  styleUrls: ['./servicereport.component.scss']
})
export class ServicereportComponent {
  @Input() public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;
  constructor() {
    this.alerts.push(
      {
        id: 1,
        type: 'primary',
        message: 'This is a primary alert',
      },
      {
        id: 2,
        type: 'info',
        message: 'This is an info alert',
      },
      {
        id: 3,
        type: 'success',
        message: 'This is an success alert',
      },
      {
        id: 4,
        type: 'warning',
        message: 'This is a warning alert',
      },
      {
        id: 5,
        type: 'danger',
        message: 'This is a danger alert',
      },
      {
        id: 6,
        type: 'secondary',
        message: 'This is an secondary alert',
      }
    );
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));



  }

}

export interface IAlert {
  id: number;
  type: string;
  message: string;

}

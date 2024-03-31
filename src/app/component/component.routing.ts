import { Routes } from '@angular/router';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';

import { ServicereportComponent } from './servicereport/servicereport.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { EmployeeTaskComponent } from './employee-task/employee-task.component';
import { DryServiceComponent } from './dry-service/dry-service.component';
import { WetServiceComponent } from './wet-service/wet-service.component';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';
import { ProfileComponent } from './profile/profile.component';
import { TermconditionComponent } from './termcondition/termcondition.component';

import { ServicecomplaintComponent } from './servicecomplaint/servicecomplaint.component';
import { ServiceimageComponent } from './serviceimage/serviceimage.component';
import { UseraddComponent } from './useradd/useradd.component';
import { ServicevedioComponent } from './servicevedio/servicevedio.component';
import { ReportserviceComponent } from './reportservice/reportservice.component';
import { DncempreportComponent } from './dncempreport/dncempreport.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'reportlist',
        component: ReportserviceComponent,
      },
      {
        path: 'addemployee',
        component: UseraddComponent,
      },
      {
        path: 'servicereport',
        component: ServicereportComponent,
      },
      {
        path: 'wetservice',
        component: WetServiceComponent,
      },
      {
        path: 'servicecomplaint',
        component: ServicecomplaintComponent,
      },
      {
        path: 'alltasks/:id',
        component: DryServiceComponent,
      },
      {
        path: 'dnctaskservicereport/:id',
        component: DncempreportComponent,
      },
      {
        path: 'employetask/:id',
        component: EmployeeTaskComponent,
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
      },
      {
        path: 'viewinvoice',
        component: ViewinvoiceComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },

      {
        path: 'dropdown',
        component: NgbdDropdownBasicComponent,
      },

      {
        path: 'termcondition',
        component: TermconditionComponent,
      },
      {
        path: 'serviceimage',
        component: ServiceimageComponent,
      },
      {
        path: 'servicevedio',
        component: ServicevedioComponent,
      },
      {
        path: 'servicevedio',
        component: ServicevedioComponent,
      },
    ],
  },
];

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutes } from './component.routing';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
// import { NgxSummernoteModule } from 'ngx-summernote';
// import { NgxPrintModule } from 'ngx-print';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { ServicereportComponent } from './servicereport/servicereport.component';
import { DryServiceComponent } from './dry-service/dry-service.component';
import { WetServiceComponent } from './wet-service/wet-service.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { EmployeeTaskComponent } from './employee-task/employee-task.component';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';
import { ProfileComponent } from './profile/profile.component';
import { TermconditionComponent } from './termcondition/termcondition.component';

import { ServiceimageComponent } from './serviceimage/serviceimage.component';
import { ServicecomplaintComponent } from './servicecomplaint/servicecomplaint.component';
import { UseraddComponent } from './useradd/useradd.component';
import { ServicevedioComponent } from './servicevedio/servicevedio.component';
import { ReportserviceComponent } from './reportservice/reportservice.component';
import { CustomeraddComponent } from './customeradd/customeradd.component';
import { NgFor } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DncempreportComponent } from './dncempreport/dncempreport.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // NgxSummernoteModule,
    MatButtonModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    NgIf,
    NgFor,
    NgbdDropdownBasicComponent,
    NgbPaginationModule,
    AngularEditorModule,
    NgbAlertModule,
    // NgxPrintModule
    NgbNavModule

  ],
  declarations: [
    ServicereportComponent,
    DryServiceComponent,
    WetServiceComponent,
    InvoiceComponent,
    EmployeeTaskComponent,
    ViewinvoiceComponent,
    ProfileComponent,

    TermconditionComponent,
    ReportserviceComponent,
    ServiceimageComponent,
    ServicecomplaintComponent,
    UseraddComponent,
    ServicevedioComponent,
    CustomeraddComponent,
    DncempreportComponent,
  ],
})
export class ComponentsModule { }

import { Component } from '@angular/core';
import { ReportserviceComponent } from '../reportservice/reportservice.component';
import { CustomerService } from '../services/customer.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dncempreport',
  templateUrl: './dncempreport.component.html',
  styleUrls: ['./dncempreport.component.scss'],
})
export class DncempreportComponent {
  page = 5;
  closeResult = '';
  userId: any;
  customers: any;

  constructor(

    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.userId = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      console.log(this.userId); //log the entire params object
      console.log('data', params['id']); //log the value of id
      this.http
        .get(environment.apiKey + `/getCustomer/${this.userId}`)
        .subscribe((res: any) => {
          if(res.errorCode == '200'){
            this.customers = res;
          }
          else{
            alert(res.message)
          }
          console.log('dataList customer', this.customers);

          console.log('dataList customer', this.customers);
        });
    });
  }
}

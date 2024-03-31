import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  dataList: any;
  selectedsevice:any;
  constructor(private http: HttpClient) {

  }
  getCustomerList() {
    this.http.get(environment.apiKey + '/getCustomer').subscribe((res) => {
      this.dataList = res;
      console.log('dataList customer', this.dataList);
    });
  }

  addCustomer(data: any) {
    this.http
      .post(environment.apiKey + '/createCustomer', data, {
        observe: 'response',
      })
      .subscribe((res) => {
        this.dataList = res;
        if (this.dataList.body.errorCode == '200') {
          alert(this.dataList.body.message);
          location.reload();
        }
      });
  }

  editCustomer(data: any, id: any) {
    console.log('dite service data', data);
    this.http
      .put(environment.apiKey + `/updateCustomer/${id}`, data, {
        observe: 'response',
      })
      .subscribe((response) => {
        this.dataList = response;
        console.log('customers put', this.dataList);
        if (this.dataList.body.errorCode == '200') {
          alert(this.dataList.body.message);
          location.reload();
        }

        console.log('edite service data', this.dataList);
      });
  }
  onDeleteCustomer(id: any) {
    console.log('deletid', id);
    this.http
      .delete(environment.apiKey + '/deletecustomer/' + id)
      .subscribe((res) => {
        this.dataList = res;
        console.log('this response', this.dataList);
        if (this.dataList.body.errorCode == '200') {
          alert(this.dataList.body.message);
          location.reload();
        }
      });
  }
}

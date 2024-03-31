import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, SubscribableOrPromise } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
// import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  API_URL = 'http://demo5.testingsites.in';
  dataList: any;
  response: any;
  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();
  constructor(
    private http: HttpClient,
    // private notifyService: NotificationService
  ) {}

  getEmployeeList() {
    // return this.http.get(this.apiUrl + 'getallemployee')
    this.http.get(environment.apiKey + '/getallemployee').subscribe((data) => {
      this.dataList = data;
    });
  }
  addEmployee(data: any) {
    this.http
      .post(this.API_URL + '/registeremployee', data, { observe: 'response' })
      .subscribe((response) => {
        this.response = response;
        if (this.response.body.errorCode == '200') {
          // this.notifyService.showSuccess(this.response.body.message);
          alert(this.response.body.message)
          location.reload();
        } else if (this.response.error_code == 400) {
          // this.notifyService.showError(this.response.body.errorCode);
        }
      });
  }
  editEmploye(data: any, id: any) {
    this.http
      .put(this.API_URL + `/updateemployee/${id}`, data, {
        observe: 'response',
      })
      .subscribe((response) => {
        this.response = response;
        if (this.response.body.errorCode == '200') {
          // this.notifyService.showSuccess(this.response.body.message);
          alert(this.response.body.message)
          location.reload();
        } else if (this.response.error_code == 400) {
          alert(this.response.body.message)

          // this.notifyService.showError(this.response.body.errorCode);
        }
      });
  }
  onDeleteEmploye(id: any) {
    this.http
      .delete(this.API_URL + '/deleteemployee/' + id)
      .subscribe((res) => {
        this.response = res;
        if (this.response.errorCode == '200') {
          location.reload();
        }
      });
  }
}

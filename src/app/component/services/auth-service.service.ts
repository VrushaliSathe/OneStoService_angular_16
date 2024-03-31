import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  currentToken = localStorage.getItem('token');

  response: any;
  constructor(
    private http: HttpClient,
    private route: Router
  ) // private notifyService: NotificationService
  {}
  private loggedInStatus = JSON.parse(
    localStorage.getItem('loggedIn') || 'false'
  );
  get LoginStatus() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.loggedInStatus.toString()
    );
  }
  login(data: any) {
    this.http
      .post(environment.apiUrl + '/login', data, { observe: 'response' })
      .subscribe((response) => {
        this.response = response;
        console.log('response', this.response.body);
        if (this.response.body.errorCode == 200) {
          console.log('login', this.response.body.message);
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('token', this.response.body.accessToken);
          this.currentToken = this.response.body.accessToken;
          alert(this.response.body.message);
          this.route.navigate(['dashboard']);
        } else {
          alert(this.response.body.message)
          console.warn('user Log Fail');
          // this.isLoginError.emit(true)
          // this.toaster.warning(this.response.body.message)
        }
      });
  }

  logout() {
    localStorage.removeItem(environment.currentToken)

  }
}

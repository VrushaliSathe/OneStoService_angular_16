import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './component/services/auth-service.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenService implements HttpInterceptor {
    constructor(private accountService: AuthServiceService) { }

    intercept(req: { clone: (arg0: { setHeaders: any }) => any; },next: { handle: (arg0: any) => any; }) {

        // add auth header with jwt if account is logged in and request is to the api url
      console.log(this.accountService.LoginStatus)
        let tokenizedReq = req.clone({
          setHeaders:{
            "x-access-token":`${localStorage.getItem(
             environment.currentToken
           )}`
          }

         })
         console.log(" environment.currentToken", localStorage.getItem(environment.currentToken))
         return next.handle(tokenizedReq)

       }
    }

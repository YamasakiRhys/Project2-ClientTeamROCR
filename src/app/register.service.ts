import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInService } from './logged-in.service';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private router: Router, private logged: LoggedInService, private login: LoginService, private httpClient: HttpClient) { }
/*
  createAccount(){
    this.httpClient.post('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/account').subscribe(x => {});
  }*/

}

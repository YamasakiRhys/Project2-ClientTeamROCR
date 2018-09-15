import { Router } from '@angular/router';
import { User } from './models/user';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  private static user: User;
  public navNum;

  constructor(private router: Router, private login: LoginService, private httpClient: HttpClient) { }

  setLoggedInUser(us) {
    LoggedInService.user = us;
    this.navNum = 2;
  }

  getLoggedInUser(): User {
    return LoggedInService.user;
  }

  getUserId(){
    return LoggedInService.user.userId;
  }

  checkLoggedInUser() {
    if (localStorage.getItem('user') === null) {
      this.router.navigate(['/']);
    }
  }

  logout(): void {
    LoggedInService.user = null;
    this.router.navigate(['']);
  }

  //will change status of user to deactivated (for now just removes from array)
  delete(): void {
    for(var i = 0; i < this.login.users.length; i++){
      if(LoggedInService.user.username == this.login.users[i].username){
        this.login.users.splice(i,1);
        this.router.navigate(['']);
      }
    }
  }
}

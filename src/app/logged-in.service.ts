import { Router } from '@angular/router';
import { User } from './models/user';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {
  private static user: User;

  constructor(private router: Router, private login: LoginService) { }

  setLoggedInUser(us) {
    LoggedInService.user = us;
  }

  getLoggedInUser(): User {
    return LoggedInService.user;
  }


  checkLoggedInUser() {
    if (localStorage.getItem('user') === null) {
      this.router.navigate(['/']);
    }
  }

  logout(): void {
    this.router.navigate(['']);
  }

  delete(): void {
    for(var i = 0; i < this.login.users.length; i++){
      if(LoggedInService.user.username == this.login.users[i].username){
        this.login.users.splice(i,1);
        this.router.navigate(['']);
      }
    }
  }
}

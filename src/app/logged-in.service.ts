import { Router } from '@angular/router';
import { User } from './models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  private static user: User;
  public navNum;

  constructor(private router: Router) { }

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
}

import { Router } from '@angular/router';
import { User } from './models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {
  private static user: User;

  constructor(private router: Router) { }

  setLoggedInUser(us) {
    console.log(LoggedInService.user);
    console.log(us);
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
}

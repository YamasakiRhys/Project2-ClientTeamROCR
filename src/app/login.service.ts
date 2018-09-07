import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private router: Router) { }

  users = [{ username: "uname", password: "pass", role: 1 },
  { username: "testing", password: "test", role: 2 },
  { username: "username", password: "password", role: 2 }];

  getUser(username, password) {
    const user = {
      role: null,
      username: username,
      password: password
    };
    for (var i = 0; i < this.users.length; i++) {
      if (user.username == this.users[i].username && user.password == this.users[i].password) {
        user.role = this.users[i].role;
        return user;
      }
    }
  }
  //change to the correct page based on the role
  changePage(user){
    if (user.role == 2) {
      this.router.navigate(['/loggedin/user']);
    } else {
      this.router.navigate(['/loggedin/manager']);
    }
  }
}
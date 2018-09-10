import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private router: Router) {}

  users = [{ user_id: 1, username: "uname", password: "pass", role: 1 },
  { user_id: 2, username: "Deson", password: "louihao", role: 2 },
  { user_id: 3, username: "Touvan", password: "louihao", role: 2 },
  { user_id: 4, username: "Kukuy", password: "kan", role: 2 }];

  getUser(username, password) {
    const user = {
      user_id: null,
      role: null,
      username: username,
      password: password
    };
    for (var i = 0; i < this.users.length; i++) {
      if (user.username == this.users[i].username && user.password == this.users[i].password) {
        user.role = this.users[i].role;
        user.user_id = this.users[i].user_id;
        return user;
      }
    }
  }

  getUsername(id){
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i].user_id == id){
        return this.users[i].username;
      }
    }
  }

  changePage(user){
    if (user.role == 2) {
      this.router.navigate(['/loggedin/user']);
    } else {
      this.router.navigate(['/loggedin/manager']);
    }
  }
}
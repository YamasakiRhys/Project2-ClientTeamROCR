import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private router: Router) {}

  users = [{ user_id: 1, username: "uname", password: "pas", role: 1 },
  { user_id: 2, email: "r@gmail.com", username: "richard", password: "pas", role: 2 },
  { user_id: 3, email: "c@gmail.com", username: "chester", password: "pas", role: 2 },
  { user_id: 4, email: "o@gmail.com", username: "obosa", password: "pas", role: 2 },
  { user_id: 5, email: "g@gmail.com", username: "goblinslaya42", password: "pas", role: 2 }];

  //filters through the user list to find a match in username and password
  getUser(username, password) {
    const user = {
      user_id: null,
      role: null,
      email: null,
      username: username,
      password: password
    };
    for (var i = 0; i < this.users.length; i++) {
      if (user.username == this.users[i].username && user.password == this.users[i].password) {
        user.role = this.users[i].role;
        user.user_id = this.users[i].user_id;
        user.email = this.users[i].email;
        return user;
      }
    }
  }

  //returns username by filtering with an id
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

  //returns a list of all non-manager users
  getUsers(){
    var userList = [];
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i].role == 2){
        userList.push(this.users[i]);
      }
    }
    return userList;
  }
}
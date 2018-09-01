//TS file for just the home page

import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})

//place to put functions and variables. not actually callable
export class HomeScreenComponent implements OnInit {

  user: User;
  //constructor for router
  constructor(private router: Router) { }

  //Hard coded user data for testing
  users = [{ username: "uname", password: "pass", role: 1 },
  { username: "testing", password: "test", role: 2 },
  { username: "username", password: "password", role: 2 }];

  //function called when the modal login button is clicked
  login(username, password) {
    console.log(username + password);
    //create a dummy user from given login info
    const user = {
      username: username,
      password: password
    };
    console.log(user);
    console.log(this.users);
    //login validation
    for (var i = 0; i < this.users.length; i++) {
      if (user.username == this.users[i].username && user.password == this.users[i].password) {
        //checks roles to redirect to correct page (1 is manager 2 is user)
        if (this.users[i].role == 2){
          this.router.navigate(['/loggedin/user']);
        } else {
          this.router.navigate(['/loggedin/manager']);
        }
        return;
      }
    }
    console.log("failed login");
  }

  ngOnInit() {
  }
}

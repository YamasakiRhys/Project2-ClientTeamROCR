import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import {SearchService} from '../../search.service';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {

  constructor(private logged: LoggedInService, private login: LoginService, private router: Router, private search: SearchService) { }

  //creates a new user
  register(uname, pass) {
    //check is username is available
    for(var i = 0; i < this.login.users.length; i++){
      if(uname == this.login.users[i].username){
        alert("Username is already taken. Please pick another");
        return;
      }
    }
    //add user to DB (array for now)
    this.login.users.push({user_id: this.login.users.length + 1, username: uname, password: pass, role: 2});
    console.log(this.login.users);
    this.router.navigate(['']);
  }

  ngOnInit() {
    console.log(this.login.users);
    this.logged.navNum = 10;
  }

}

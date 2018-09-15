import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {

  constructor(private logged: LoggedInService, private login: LoginService, private router: Router) { }

  register(uname, pass) {

    for(var i = 0; i < this.login.users.length; i++){
      if(uname == this.login.users[i].username){
        alert("Username is already taken. Please pick another");
        return;
      }
    }

    this.login.users.push({user_id: this.login.users.length + 1, username: uname, password: pass, role: 2});
    console.log(this.login.users);
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.logged.setLoggedInUser({username: null, password: null, role:10});
  }

}

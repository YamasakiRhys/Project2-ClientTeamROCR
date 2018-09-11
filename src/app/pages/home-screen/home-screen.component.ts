//TS file for just the home page
import { LoginService } from '../../login.service';
import { LoggedInService } from '../../logged-in.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})

//place to put functions and variables. not actually callable
export class HomeScreenComponent implements OnInit {

  //constructor for router
  constructor(private login: LoginService, private logged: LoggedInService) { }

  ngOnInit() {
    this.logged.setLoggedInUser({username: null, password: null, role:9});
  }
}

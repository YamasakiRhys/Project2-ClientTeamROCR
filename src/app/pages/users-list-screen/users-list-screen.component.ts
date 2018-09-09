import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list-screen',
  templateUrl: './users-list-screen.component.html',
  styleUrls: ['./users-list-screen.component.css']
})
export class UsersListScreenComponent implements OnInit {

  users=[];

  constructor(private logged: LoggedInService, private login: LoginService, private router: Router) { }

  ngOnInit() {
    this.users = this.login.getUsers();
  }

}

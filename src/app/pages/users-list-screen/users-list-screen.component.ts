import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-users-list-screen',
  templateUrl: './users-list-screen.component.html',
  styleUrls: ['./users-list-screen.component.css']
})
export class UsersListScreenComponent implements OnInit {

  users=[];

  constructor(private login: LoginService) { }

  ngOnInit() {
    this.users = this.login.getUsers();
  }

}

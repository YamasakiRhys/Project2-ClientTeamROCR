import { LoginService } from '../../login.service';
import { LoggedInService } from '../../logged-in.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})

export class HomeScreenComponent implements OnInit {

  constructor(private login: LoginService, private logged: LoggedInService) { }

  ngOnInit() {
    this.logged.navNum = 9;
  }
}

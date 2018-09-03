import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {

  constructor(private logged: LoggedInService) { }

  ngOnInit() {
    this.logged.setLoggedInUser({username: null, password: null, role:10});
  }

}

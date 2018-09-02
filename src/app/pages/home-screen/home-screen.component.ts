//TS file for just the home page
import { LoginService } from '../../login.service';
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

  user: User;
  err: string;

  //constructor for router
  constructor(private login: LoginService) { }

  //function called when the modal login button is clicked
  userLogin(username, password): void {
    //this.login.getUser is the getUser function in the login.service.ts
    this.user = this.login.getUser(username, password)
      // if login was successful
      if (this.user) {
        // call the service function that changes the page
        this.login.changePage(this.user);
      } else {
        this.err = 'You have input an incorrect email/password combination';
      }
  }



  ngOnInit() {
  }
}

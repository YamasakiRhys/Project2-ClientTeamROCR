import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';
import {TradeService} from '../trade.service';
import {SearchService} from '../search.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  user: User;
  err: string;
  genres = [];

  constructor(private login: LoginService, private router: Router, private logged: LoggedInService, private tradeServ: TradeService, private search: SearchService) { }

  //function called when the modal login button is clicked
  userLogin(username, password): void {
    this.user = this.login.getUser(username, password)
      if (this.user) {
        this.logged.setLoggedInUser(this.user);
        this.login.changePage(this.user);
      } else {
        this.err = 'You have input an incorrect email/password combination';
      }
      document.getElementById('lodmod').style.display='none'
  }
  
  //when the dropdown is changed
  selectChangeHandler (event: any) {
    this.search.selectedGenre = event.target.value;
    this.router.navigate(['/loggedin/manager'])
    .then(()=>{this.router.navigate(['/loggedin/user'])});
  }

  register(): void{
    this.router.navigate(['/register']);
  }

  backHome(): void{
    this.router.navigate(['/']);
  }
  backUser(): void{
    this.router.navigate(['/loggedin/user']);
  }

  newTrade(): void{
    this.router.navigate(['/loggedin/user/trade']);
  }

  getUsers(){
    this.router.navigate(['/loggedin/manager/userlist']);
  }

  viewMyTrades(){
    this.router.navigate(['/loggedin/user/mytrades']);
  }

  ngOnInit() {
  }

}

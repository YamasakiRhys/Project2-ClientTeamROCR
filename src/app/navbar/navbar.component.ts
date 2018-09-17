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
  genres = [];

  constructor(private login: LoginService, private router: Router, public logged: LoggedInService, private tradeServ: TradeService, private search: SearchService) { }

  //function called when the modal login button is clicked
  userLogin(username, password): void {
    this.login.getUser(username, password).subscribe(x => {this.user = x;
      if (this.user) {
        this.logged.setLoggedInUser(this.user);
        this.router.navigate(['/loggedin/user']);
      } else {
        alert('You have input an incorrect username/password combination');
        return;
      }
      document.getElementById('lodmod').style.display='none'});
  }

  //when the dropdown is changed
  selectChangeHandler (event: any) {
    console.log(event.target.value);
    this.search.selectedGenre = event.target.value;
    console.log(this.search.selectedGenre);
    this.router.navigate(['/loggedin/manager'])
    .then(()=>{this.router.navigate(['/loggedin/user'])});
  }

  updateAll(){
    this.login.getAccounts();
    this.tradeServ.setRequests();
    this.search.setAllGames();
    this.tradeServ.setTrades();
  }

  register(): void{
    this.router.navigate(['/register']);
  }

  backHome(): void{
    this.router.navigate(['/']);
  }
  backUser(): void{
    this.updateAll();
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
    if(!this.logged.getLoggedInUser()){
      //this.backHome();
    }
    this.updateAll();
  }

}

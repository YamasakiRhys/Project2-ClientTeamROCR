import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import {TradeService} from '../../trade.service';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  public userPairs;

  constructor(private login: LoginService, public logged: LoggedInService, private tradeServ: TradeService, private router: Router) { }

  handleOffers(){
    this.router.navigate(['/loggedin/user/handleoffers']);
  }

  ngOnInit() {
    this.logged.navNum = 2;
    console.log(this.logged.getLoggedInUser());
    this.userPairs = this.tradeServ.getPairs();
  }

}
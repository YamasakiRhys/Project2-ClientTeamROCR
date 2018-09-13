import { Component, OnInit } from '@angular/core';
import {TradeService} from '../../trade.service'
import { Router } from '@angular/router';
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-trading-screen',
  templateUrl: './trading-screen.component.html',
  styleUrls: ['./trading-screen.component.css']
})
export class TradingScreenComponent implements OnInit {

  public userTrades = [];

  constructor(private logged: LoggedInService, private login: LoginService, private search: SearchService, private tradeServ: TradeService, private router: Router) { }

  getUsername(id) {
    return this.login.getUsername(id);
  }

  makeOffer(trade_id){
    this.tradeServ.offer2Id = trade_id;
    this.tradeServ.createTrade();
    this.router.navigate(['/loggedin/user']);
  }

  ngOnInit() {
    this.logged.setLoggedInUser({ user_id: 2, email: "r@gmail.com", username: "richard", password: "pas", role: 2 });
    this.userTrades = this.tradeServ.getTradesById(this.logged.getUserId());
  }
}

import { Component, OnInit } from '@angular/core';
import {TradeService} from '../trade.service'
import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';
import { LoginService } from '../login.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-recent-trades',
  templateUrl: './recent-trades.component.html',
  styleUrls: ['./recent-trades.component.css']
})
export class RecentTradesComponent implements OnInit {

  selectedTrades = [];
  offerId;

  constructor(private tradeServ: TradeService, private router: Router, private logged: LoggedInService, private login: LoginService, private search: SearchService) { }

  getUsername(id){
    return this.login.getUsername(id);
  }

  //Currently working on. this is the start of the trade process. When a user selects a trade they will be prompted to make an offer
  makeOffer(trade_id){
    this.tradeServ.offer1Id = trade_id;
    this.tradeServ.makingTrade = true;
    this.router.navigate(['/loggedin/user/trading']);
  }

  ngOnInit() {
    this.selectedTrades = this.search.SearchFilter(this.tradeServ.trades);
  }
}

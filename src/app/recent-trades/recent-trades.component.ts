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

  constructor(private tradeServ: TradeService, private router: Router, private logged: LoggedInService, private login: LoginService, private search: SearchService) { }

  getUsername(id){
    return this.login.getUsername(id);
  }

  makeOffer(trade_id){
    console.log(trade_id);
  }

  ngOnInit() {
    this.selectedTrades = this.search.SearchFilter(this.tradeServ.trades);
  }
}

import { Component, OnInit } from '@angular/core';
import {TradeService} from '../../trade.service'
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-trading-screen',
  templateUrl: './trading-screen.component.html',
  styleUrls: ['./trading-screen.component.css']
})
export class TradingScreenComponent implements OnInit {

  public userTrades = [];

  constructor(private logged: LoggedInService, private login: LoginService,private tradeServ: TradeService) { }

  getUsername(id) {
    return this.login.getUsername(id);
  }

  makeOffer(trade_id){
    this.tradeServ.offer2Id = trade_id;
    this.tradeServ.createTrade();
  }

  ngOnInit() {
    this.logged.navNum = 11;
    this.userTrades = this.tradeServ.getTradesById(this.logged.getUserId());
  }
}

import { Component, OnInit } from '@angular/core';
import {TradeService} from '../../trade.service'
import { Router } from '@angular/router';
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-my-trades-screen',
  templateUrl: './my-trades-screen.component.html',
  styleUrls: ['./my-trades-screen.component.css']
})
export class MyTradesScreenComponent implements OnInit {

  myTrades = [];
  noTrades = false;

  constructor(private tradeServ: TradeService, private router: Router, private logged: LoggedInService, private login: LoginService) { }
  
  getUsername(id){
    return this.login.getUsername(id);
  }

  deleteTrade(trade_id){
    this.tradeServ.deleteTrade(trade_id);
    this.router.navigate(['/loggedin/user'])
    .then(()=>{this.router.navigate(['/loggedin/user/mytrades'])});
  }

  //When the age loads, update the trades
  ngOnInit() {
    var filterTrades = [];
    var trades = this.tradeServ.trades;
    for (var i = 0; i < trades.length; i++) {
      if(trades[i].user_id != this.logged.getUserId()){
        continue;
      }
      filterTrades.push(trades[i]);
    }
    if(filterTrades.length == 0){
      this.noTrades = true;
    }
    this.myTrades = filterTrades;
  }
}

import { Component, OnInit } from '@angular/core';
import { TradeService } from '../../trade.service'
import { Router } from '@angular/router';
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-my-trades-screen',
  templateUrl: './my-trades-screen.component.html',
  styleUrls: ['./my-trades-screen.component.css']
})
export class MyTradesScreenComponent implements OnInit {

  myOpenTrades = [];
  myOfferedTrades = [];
  myPendingTrades = [];
  noTrades = false;

  constructor(private tradeServ: TradeService, private router: Router, private logged: LoggedInService, private login: LoginService) { }

  getUsername(id) {
    return this.login.getUsername(id);
  }

  deleteTrade(trade_id) {
    this.tradeServ.deleteTrade(trade_id);
    this.router.navigate(['/loggedin/user'])
      .then(() => { this.router.navigate(['/loggedin/user/mytrades']) });
  }

  backUser(): void{
    this.router.navigate(['/loggedin/user']);
  }

  //When the age loads, update the trades
  ngOnInit() {
    this.logged.navNum = 11;
    this.myOpenTrades = [];
    this.myOfferedTrades = [];
    this.myPendingTrades = [];
    var trades = this.tradeServ.trades;
    this.noTrades = true;
    for (var i = 0; i < trades.length; i++) {
      if (trades[i].user_id != this.logged.getUserId()) {
        continue;
      }
      this.noTrades = false;
      switch (trades[i].status) {
        case 1:
          this.myOpenTrades.push(trades[i]);
          break;
        case 2:
          this.myOfferedTrades.push(trades[i]);
          break;
        case 3:
          this.myPendingTrades.push(trades[i]);
          break;
      }
    }
  }
}

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
  myApprovedTrades = [];
  myPendingTrades = [];
  noTrades = false;

  constructor(private tradeServ: TradeService, private router: Router, private logged: LoggedInService, private login: LoginService) { }

  getUsername(id) {
    return this.login.getUsername(id);
  }

  deleteTrade(requestId) {
    this.tradeServ.deleteTrade(requestId);
  }

  takeBack(tradeId) {
    this.tradeServ.takeBack(tradeId);
  }

  backUser(): void {
    this.router.navigate(['/loggedin/user']);
  }

  //When the page loads, update the requests and trades
  ngOnInit() {
    this.logged.navNum = 11;
    this.myOpenTrades = [];
    this.myApprovedTrades = [];
    this.myPendingTrades = [];
    var trades = this.tradeServ.trades;
    this.noTrades = true;
    for (var i = 0; i < trades.length; i++) {
      if (trades[i].account.userId != this.logged.getUserId() || trades[i].statusId != 3) {
        continue;
      }
      this.noTrades = false;
      this.myOpenTrades.push(trades[i]);
    }
    var pairs = this.tradeServ.pairs;
    for (i = 0; i < pairs.length; i++) {
      if (pairs[i].statusId == 2 && pairs[i].givenOffer.account.userId == this.logged.getUserId()) {
        this.myPendingTrades.push(pairs[i]);
      } else if (pairs[i].statusId == 1 && pairs[i].givenOffer.account.userId == this.logged.getUserId()) {
        this.myApprovedTrades.push(pairs[i]);
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { TradeService } from '../../trade.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handle-offers-screen',
  templateUrl: './handle-offers-screen.component.html',
  styleUrls: ['./handle-offers-screen.component.css']
})
export class HandleOffersScreenComponent implements OnInit {

  public pairs = [];

  constructor(private logged: LoggedInService, private tradeServ: TradeService, private router: Router, private login: LoginService) { }

  getUsername(id) {
    return this.login.getUsername(id);
  }

  accepted(pair){
    this.tradeServ.handleTrade(pair[0].trade_id, pair[1].trade_id, 3);
    this.router.navigate(['/loggedin/user']);
  }

  declined(pair){
    this.tradeServ.handleTrade(pair[0].trade_id, pair[1].trade_id, 1);
    this.router.navigate(['/loggedin/user']);
  }

  ngOnInit() {
    this.logged.navNum = 11;
    this.pairs = this.tradeServ.getPairs();
  }
}

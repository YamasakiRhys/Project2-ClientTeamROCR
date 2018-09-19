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

  accepted(pairId){
    this.tradeServ.handleTrade(pairId, 1);
  }

  declined(pairId){
    this.tradeServ.handleTrade(pairId, 4);
  }

  ngOnInit() {
    this.logged.navNum = 11;
    this.pairs = this.tradeServ.getPairs();
  }
}

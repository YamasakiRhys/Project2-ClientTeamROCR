import { Component, OnInit } from '@angular/core';
import {TradeService} from '../trade.service'
import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-recent-trades',
  templateUrl: './recent-trades.component.html',
  styleUrls: ['./recent-trades.component.css']
})
export class RecentTradesComponent implements OnInit {

  constructor(private tradeServ: TradeService, private router: Router, private logged: LoggedInService) { }

  ngOnInit() {
  }

}

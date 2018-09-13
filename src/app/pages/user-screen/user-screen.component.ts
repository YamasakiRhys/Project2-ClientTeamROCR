import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import {TradeService} from '../../trade.service';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  constructor(private logged: LoggedInService, private tradeServ: TradeService) { }

  ngOnInit() {
    this.logged.navNum = 2;
    var userPairs = this.tradeServ.getPairs();
    console.log(userPairs);
  }

}
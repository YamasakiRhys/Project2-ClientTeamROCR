import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import {TradeService} from '../../trade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  public userPairs;

  constructor(private logged: LoggedInService, private tradeServ: TradeService, private router: Router) { }

  handleOffers(){
    this.router.navigate(['/loggedin/user/handleoffers']);
  }

  ngOnInit() {
    this.logged.navNum = 2;
    this.userPairs = this.tradeServ.getPairs();
    console.log(this.tradeServ.trades);
  }

}
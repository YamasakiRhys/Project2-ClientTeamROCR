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

  /* makeTrade(rTitle, rGenre, rPlot, rImage, rGenrePref) {
    this.tradeServ.trades.push({game_title: rTitle, genre: rGenre, plot: rPlot, img: rImage, user_name: this.logged.getLoggedInUser().username, genrePref: rGenrePref, status: 1});
    this.router.navigate(['/loggedin/user']);
  } */

  ngOnInit() {
    //console.log(this.tradeServ.trades[i])
  }

}

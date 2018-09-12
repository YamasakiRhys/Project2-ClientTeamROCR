import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import {TradeService} from '../../trade.service'

@Component({
  selector: 'app-new-trade-screen',
  templateUrl: './new-trade-screen.component.html',
  styleUrls: ['./new-trade-screen.component.css']
})
export class NewTradeScreenComponent implements OnInit {

  constructor(private tradeServ: TradeService, private logged: LoggedInService, private login: LoginService, private router: Router) { }

  //add the new trade to the DB (array for now)
  makeTrade(rTitle, rGenre, rPlot, rImage, rGenrePref) {
    this.tradeServ.trades.push({ trade_id: this.tradeServ.trades.length + 1, user_id: this.logged.getLoggedInUser().user_id, game_title: rTitle, genre: rGenre, plot: rPlot, img: rImage, genrePref: rGenrePref, status: 1});
    this.router.navigate(['/loggedin/user']);
  }

  ngOnInit() {
  }

}

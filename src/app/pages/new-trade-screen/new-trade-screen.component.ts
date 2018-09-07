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


  makeTrade(rTitle, rGenre, rPlot, rImage, rGenrePref) {
    this.tradeServ.trades.push({game_title: rTitle, genre: rGenre, plot: rPlot, img: rImage, user_name: this.logged.getLoggedInUser().username, genrePref: rGenrePref, status: 1});
    this.router.navigate(['/loggedin/user']);
  }

  ngOnInit() {
  }

}

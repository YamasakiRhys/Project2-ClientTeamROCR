import { LoginService } from '../../login.service';
import { LoggedInService } from '../../logged-in.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Trade } from '../../models/trade';
import { TradeService } from '../../trade.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})

export class HomeScreenComponent implements OnInit {

  users: User[];

  constructor(private login: LoginService, public logged: LoggedInService, private tradeServ: TradeService, private search: SearchService) { }

  ngOnInit() {
    this.logged.navNum = 9;
    //this.search.setAllLocations();
  }
}

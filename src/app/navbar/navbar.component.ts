import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';
import {TradeService} from '../trade.service';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  user: User;
  genres = [];

  constructor(private router: Router, private logged: LoggedInService, private tradeServ: TradeService, private search: SearchService) { }

  selectChangeHandler (event: any) {
    this.search.selectedGenre = event.target.value;
    this.router.navigate(['/loggedin/manager'])
    .then(()=>{this.router.navigate(['/loggedin/user'])});
  }

  register(): void{
    this.router.navigate(['/register']);
  }

  backHome(): void{
    this.router.navigate(['/']);
  }

  newTrade(): void{
    this.router.navigate(['/loggedin/user/trade']);
  }

  ngOnInit() {
    this.genres = this.tradeServ.getGenres();
  }

  getUsers(){
    this.router.navigate(['/loggedin/manager/userlist']);
  }
}

import { LoggedInService } from '../../logged-in.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})

export class HomeScreenComponent implements OnInit {

  users: User[];

  constructor(public logged: LoggedInService, private search: SearchService) { }

  ngOnInit() {
    this.logged.navNum = 9;
    this.search.setAllGenres();
    this.search.setAllLocations();
  }
}

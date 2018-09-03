import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  constructor(private logged: LoggedInService) { }

  ngOnInit() {
  }

}

// NOT USED

import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../logged-in.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  constructor(private logged: LoggedInService) { }

  modalOn = false;

  ngOnInit() {
  }

  

}

// NOT USED

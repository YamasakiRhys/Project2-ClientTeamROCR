import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { LoggedInService } from '../../logged-in.service';

@Component({
  selector: 'app-manager-screen',
  templateUrl: './manager-screen.component.html',
  styleUrls: ['./manager-screen.component.css']
})
export class ManagerScreenComponent implements OnInit {

  constructor(private log: LoginService,private logged: LoggedInService) { }

  ngOnInit() {
  }

}
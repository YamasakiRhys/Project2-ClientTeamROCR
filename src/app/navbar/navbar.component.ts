import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  constructor(private router: Router, private logged: LoggedInService) { }

  register(): void{
    this.router.navigate(['/register']);
  }

  backHome(): void{
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

  

}

// NOT USED

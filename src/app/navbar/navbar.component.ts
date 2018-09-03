import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../logged-in.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  constructor(private logged: LoggedInService, private router: Router) { }

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

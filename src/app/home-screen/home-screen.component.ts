import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private router: Router) { }

  login(username, password) {
    console.log("test" + username + password);
    const user = {
      username: username,
      password: password
    };
    console.log(this.user);
    this.router.navigate(['/logedin']);
  }

  ngOnInit() {
  }
}

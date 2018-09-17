import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';
import { SearchService } from '../../search.service';
import { User } from '../../models/user';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {

  constructor(private logged: LoggedInService, private reg: RegisterService, private login: LoginService, private search: SearchService) { }

  selectedCountry;
  selectedState;
  selectedCity;

  selectCountry(event){
    this.selectedCountry = parseInt(event.target.value);
  }

  selectState(event) {
    this.selectedState = parseInt(event.target.value);
  }

  selectCity(event) {
    this.selectedCity = parseInt(event.target.value);
  }

  //creates a new user
  register(rUsername, rPassword, rFname, rLname, rEmail, rStreet, rPhone) {
    if(!rUsername || !rPassword || !rFname || !rLname || !rEmail || !rStreet || !rPhone || !this.selectedCity || !this.selectedState || !this.selectedCountry){
      alert('Please fill in all boxes');
      return;
    }
    //check is username is available
    for (var i = 0; i < this.login.users.length; i++) {
      if (rUsername == this.login.users[i].username) {
        alert("Username is already taken. Please pick another");
        return;
      }
    }
    var user: User = {
      email: rEmail,
      fname: rFname,
      lname: rLname,
      username: rUsername,
      password: rPassword,
      phoneNumber: parseInt(rPhone),
      streetAddress: rStreet,
      roleId: 2,
      cityId: this.selectedCity,
      stateId: this.selectedState,
      countryId: this.selectedCountry
    }
    console.log(user);
    this.reg.createAccount(user);
  }

  ngOnInit() {
    console.log(this.login.users);
    this.logged.navNum = 10;
  }

}

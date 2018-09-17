import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}
  users = [];

  //gets all accounts from the DB and sets them
  getAccounts(){
    return this.httpClient.get<User[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/account').subscribe(x => {
      this.users = x
      console.log("users");
      console.log(this.users);
    });
  }

  //filters through the user list to find a match in username and password
  getUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return this.httpClient.post<User>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/login', user);
  }

  //returns username by filtering with an id
  getUsername(id){
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i].userId == id){
        return this.users[i].username;
      }
    }
  }
  
  //returns a list of all non-manager users
  getUsers(){
    var userList = [];
    for(var i = 0; i < this.users.length; i++){
      userList.push(this.users[i]);
    }
    return userList;
  }
}
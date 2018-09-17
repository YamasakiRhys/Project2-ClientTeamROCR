import { Injectable } from '@angular/core';
import { IfStmt } from '../../node_modules/@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { LoggedInService } from './logged-in.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  selectedGenre: string = "";
  allGenres = [];
  allGames = [];
  allCountries = [];
  allStates = [];
  allCities = [];

  constructor(private httpClient: HttpClient, public logged: LoggedInService) { }

  //gets all genres from the DB and sets them
  setAllGenres(){
    this.httpClient.get<String[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/games/genres').subscribe(x => {
      this.allGenres = x;
    })
  }
  //get all location information and store them in arrays
  setAllLocations(){
    this.httpClient.get<String[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/country').subscribe(x => {
      this.allCountries = x;
    })
    this.httpClient.get<String[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/state').subscribe(x => {
      this.allStates = x;
    })
    this.httpClient.get<String[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/city').subscribe(x => {
      this.allCities = x;
    })
  }

  //gets all games from the DB and sets them
  setAllGames(){
    this.httpClient.get<String[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/games').subscribe(x => {
      this.allGames = x;
      console.log(this.allGames);
    })
  }

  //Filters trades to only get the trades with the selected genre
  SearchFilter(trades) {
    //first filter out the trades that are not open
    var filtTrades = [];
    for (var i = 0; i < trades.length; i++) {
      if(trades[i].status.statusId == 3 && trades[i].account.userId != this.logged.getUserId()){
        filtTrades.push(trades[i]);
      }
    }
    //then filter out the trades with a different genre
    var filteredTrades = [];
    for (var i = 0; i < filtTrades.length; i++) {
      if(filtTrades[i].games.genre.genreId != this.selectedGenre){
        continue;
      }
      filteredTrades.push(filtTrades[i]);
    }
    if(filteredTrades.length == 0){
      return filtTrades;
    }
    return filteredTrades;
  }
}

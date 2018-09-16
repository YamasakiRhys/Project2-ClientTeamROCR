import { Injectable } from '@angular/core';
import { IfStmt } from '../../node_modules/@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  selectedGenre: string = "";
  allGenres = [];
  allGames = [];
  allCountries = [{countryId: 1, country: "America"},{countryId: 2, country: "Canada"},{countryId: 3, country: "Mexico"},{countryId: 4, country: "Japan"}];
  allStates = [{stateId: 1, state: "Minnesota"},{stateId: 2, state: "New York"},{stateId: 3, state: "California"},{stateId: 4, state: "Texas"},{stateId: 5, state: "Florida"}];
  allCities = [{cityId: 1, city: "Wichita"},{cityId: 2, city: "San Bernardino"},{cityId: 3, city: "New York"},{cityId: 4, city: "Minneapolis"},{cityId: 5, city: "Honolulu"}];

  constructor(private httpClient: HttpClient) { }

  //gets all genres from the DB and sets them
  setAllGenres(){
    this.httpClient.get<String[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/games/genres').subscribe(x => {
      this.allGenres = x;
    })
  }
/*
  setAllLocations(){
    this.httpClient.get<String[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/countries').subscribe(x => {
      this.allCountries = x;
    })
    this.httpClient.get<String[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/states').subscribe(x => {
      this.allStates = x;
    })
    this.httpClient.get<String[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/cities').subscribe(x => {
      this.allCities = x;
    })
  }*/

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
      if(trades[i].status.statusId == 3){
        filtTrades.push(trades[i]);
      }
    }
    //then filter out the trades with a different genre
    var filteredTrades = [];
    console.log(this.selectedGenre);
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

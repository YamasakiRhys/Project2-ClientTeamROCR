import { Injectable } from '@angular/core';
import { LoggedInService } from './logged-in.service';
import { Trade } from './models/trade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  trades;
  pairs = [];

  offer1Id;
  offer2Id;
  makingTrade = false;

  constructor(private logged: LoggedInService, private httpClient: HttpClient) { }

  //get all trades from the DB and set them
  setTrades(){
    return this.httpClient.get<Trade[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests').subscribe(x => {
      this.trades = x;
    });
  }

  //print method for testing/debugging
  printTrades() {
    for (var i = 0; i < this.trades.length; i++) {
      console.log(this.trades[i]);
    }
    console.log(this.pairs);
    console.log(this.trades);
  }

  //gets a list of genres from all the trades and filters out duplicates
  getGenres() {
    var genres = [];
    var isDupe = false;
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].status.statusId != 3) {
        continue;
      }
      for (var j = 0; j < genres.length; j++) {
        if (this.trades[i].games.genre.genreType == genres[j]) {
          isDupe = true;
          break;
        }
      }
      if (!isDupe) {
        genres.push(this.trades[i].games.genre.genreType);
      }
    }
    return genres;
  }

  //delets a trade with the given id
  deleteTrade(trade_id) {
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].trade_id == trade_id) {
        this.trades.splice(i, 1);
        break;
      }
    }
  }

  //return a list of trades made by the given user ID
  getTradesById(user_id) {
    var userTrades = [];
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].user_id == user_id) {
        userTrades.push(this.trades[i]);
      }
    }
    return userTrades;
  }

  //creates a request
  createTrade() {
    this.printTrades();
    var offer1, offer2;
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].trade_id == this.offer1Id) {
        this.trades[i].status.statusId = 2;
        offer1 = this.trades[i];
        var first = i;
      }
      if (this.trades[i].trade_id == this.offer2Id) {
        this.trades[i].status.statusId = 2;
        offer2 = this.trades[i];
        var second = i;
      }
    }
    if (first < second) {
      this.trades.splice(second, 1);
      this.trades.splice(first, 1);
    } else {
      this.trades.splice(first, 1);
      this.trades.splice(second, 1);
    }
    this.pairs.push({ id: this.pairs.length, first: offer1, second: offer2 });
  }

  //gets all trades
  getPairs() {
    var userPairs = [];
    for (var i = 0; i < this.pairs.length; i++) {
      if (this.logged.getUserId() == this.pairs[i].first.user_id) {
        userPairs.push(this.pairs[i]);
      }
    }
    return userPairs;
  }

  //changes status on bothrequests in the trade depending on it was accepted/declined
  handleTrade(pairId, statusId) {
    this.printTrades();
    for (var i = 0; i < this.pairs.length; i++) {
      if (this.pairs[i].id == pairId) {
        this.pairs[i].first.status.statusId = statusId;
        this.trades.push(this.pairs[i].first);
        this.pairs[i].second.status.statusId = statusId;
        this.trades.push(this.pairs[i].second);
        this.pairs.splice(i, 1);
      }
    }
  }
}

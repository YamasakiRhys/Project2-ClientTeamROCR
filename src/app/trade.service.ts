import { Injectable } from '@angular/core';
import { LoggedInService } from './logged-in.service';
import { Trade } from './models/trade';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  trades;
  pairs;

  offer1Id;
  offer2Id;
  makingTrade = false;

  constructor(private logged: LoggedInService, private httpClient: HttpClient, private router: Router) { }

  //get all trades from the DB and set them
  setRequests() {
    return this.httpClient.get<Trade[]>('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests').subscribe(x => {
      this.trades = x;
      console.log(this.trades);
    });
  }

  setTrades() {
    this.httpClient.get('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/trade').subscribe(x => {
      this.pairs = x;
      console.log(this.pairs);
      if (!this.logged.getUserId) {
        this.router.navigate(['/loggedin/user']);
      }
    })
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
        genres.push(this.trades[i].games.genre);
      }
    }
    return genres;
  }

  //delets a trade with the given id
  deleteTrade(requestId) {
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].requestId == requestId) {
        var request = {
          userId: this.trades[i].userId,
          gameId: this.trades[i].games.gameId,
          description: this.trades[i].description
        }
      }
    }
    console.log(requestId);
    console.log(request);
    return this.httpClient.put('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests/closed/' + requestId, request).subscribe(x => {
      this.setRequests();
      this.router.navigate(['/loggedin/user'])
        .then(() => { this.router.navigate(['/loggedin/user/mytrades']) });
    })
  }

  //return a list of trades made by the given user ID
  getTradesById(user_id) {
    var userTrades = [];
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].userId == user_id && this.trades[i].statusId == 3) {
        userTrades.push(this.trades[i]);
      }
    }
    return userTrades;
  }

  //creates a request
  createTrade() {
    var request1, request2;
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].requestId == this.offer1Id) {
        request1 = {
          userId: this.trades[i].userId,
          gameId: this.trades[i].games.gameId,
          description: this.trades[i].description
        }
      }
      if (this.trades[i].requestId == this.offer2Id) {
        request2 = {
          userId: this.trades[i].userId,
          gameId: this.trades[i].games.gameId,
          description: this.trades[i].description
        }
      }
    }
    this.httpClient.put('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests/pending/' + this.offer1Id, request1).subscribe(x => { });
    this.httpClient.put('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests/pending/' + this.offer2Id, request2).subscribe(x => { });

    const trade =
    {
      requestedOfferId: this.offer1Id,
      givenOfferId: this.offer2Id
    }
    this.httpClient.post('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/trade', trade).subscribe(x => {
      this.setRequests();
      this.setTrades();
      this.router.navigate(['/loggedin/user']);
    });
  }

  takeBack(tradeId) {
    for (var i = 0; i < this.pairs.length; i++) {
      if (this.pairs[i].tradeId == tradeId) {
        this.offer1Id = this.pairs[i].givenOffer.requestId
        this.offer2Id = this.pairs[i].requestOffer.requestId
        var request1 = {
          userId: this.pairs[i].givenOffer.account.userId,
          gameId: this.pairs[i].givenOffer.games.gameId,
          description: this.pairs[i].givenOffer.description
        }
        var request2 = {
          userId: this.pairs[i].requestOffer.account.userId,
          gameId: this.pairs[i].requestOffer.games.gameId,
          description: this.pairs[i].requestOffer.description
        }
      }
    }
    const trade =
    {
      requestedOfferId: this.offer1Id,
      givenOfferId: this.offer2Id
    }
    this.httpClient.put('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests/open/' + this.offer1Id, request1).subscribe(x => { });
    this.httpClient.put('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests/open/' + this.offer2Id, request2).subscribe(x => { });
    this.httpClient.put('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/trade/closed/' + tradeId, trade).subscribe(x => {
      this.setRequests();
      this.setTrades();
      this.router.navigate(['/loggedin/user']);
    });
  }

  //gets all trades
  getPairs() {
    var userPairs = [];
    for (var i = 0; i < this.pairs.length; i++) {
      if (this.logged.getUserId() == this.pairs[i].requestOffer.account.userId && this.pairs[i].statusId == 2) {
        userPairs.push(this.pairs[i]);
      }
    }
    return userPairs;
  }

  //changes status on bothrequests in the trade depending on it was accepted/declined
  handleTrade(pairId, statusId) {
    if (statusId == 4) {
      this.takeBack(pairId);
    }

    for (var i = 0; i < this.pairs.length; i++) {
      if (this.pairs[i].tradeId == pairId) {
        this.offer1Id = this.pairs[i].givenOffer.requestId
        this.offer2Id = this.pairs[i].requestOffer.requestId
        var request1 = {
          userId: this.pairs[i].givenOffer.account.userId,
          gameId: this.pairs[i].givenOffer.games.gameId,
          description: this.pairs[i].givenOffer.description
        }
        var request2 = {
          userId: this.pairs[i].requestOffer.account.userId,
          gameId: this.pairs[i].requestOffer.games.gameId,
          description: this.pairs[i].requestOffer.description
        }
      }
    }
    const trade =
    {
      requestedOfferId: this.offer1Id,
      givenOfferId: this.offer2Id
    }

    this.httpClient.put('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests/accepted/' + this.offer1Id, request1).subscribe(x => { });
        this.httpClient.put('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests/accepted/' + this.offer2Id, request2).subscribe(x => { });
        this.httpClient.put('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/trade/accepted/' + pairId, trade).subscribe(x => {
          this.setRequests();
          this.setTrades();
          this.router.navigate(['/loggedin/user']);
        });
  }
}

import { Injectable } from '@angular/core';
import { LoggedInService } from './logged-in.service';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  trades = [{ trade_id: 1, game_title: "Super Mario 64", genre: "Platformer", plot: "Princes bakes-a-lot gets captured for the nth time. Also paintings are alive now", img: "http://n64media.ign.com/n64/image/object/000/000606/602851.jpg", user_id: 3, genrePref: "RPG", status: 1 },
  { trade_id: 2, game_title: "Touhou Riverbed Soul Saver", genre: "Bullet Hell", plot: "Something about a flood coming from a pocket dimention. I cant find the full translation...", img: "https://en.touhouwiki.net/images/thumb/4/44/RiverbedSoulSaverTitle.png/256px-RiverbedSoulSaverTitle.png", user_id: 2, genrePref: "Horror", status: 1 },
  { trade_id: 3, game_title: "Smite", genre: "MOBA", plot: "Dieties fight but only like 5 of them are able to win because hi-rez cant balance for shit", img: "https://cdn.mmohuts.com/wp-content/uploads/2015/03/Smite_604x423.jpg", user_id: 3, genrePref: "MMO", status: 1 },
  { trade_id: 4, game_title: "Sudoku", genre: "Puzzle", plot: "You put the numbers in the boxes....gg", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png", user_id: 2, genrePref: "platformer", status: 1 }];

  pairs = [];

  offer1Id;
  offer2Id;
  makingTrade = false;

  constructor(private logged: LoggedInService) { }

  //gets a list of genres from all the trades and filters out duplicates
  getGenres() {
    var genres = [];
    var isDupe = false;
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].status != 1) {
        continue;
      }
      for (var j = 0; j < genres.length; j++) {
        if (this.trades[i].genre == genres[j]) {
          isDupe = true;
          break;
        }
      }
      if (!isDupe) {
        genres.push(this.trades[i].genre);
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

  getTradesById(user_id) {
    var userTrades = [];
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].user_id == user_id) {
        userTrades.push(this.trades[i]);
      }
    }
    return userTrades;
  }

  createTrade() {
    var offer1, offer2;
    for (var i = 0; i < this.trades.length; i++) {
      if (this.trades[i].trade_id == this.offer1Id) {
        this.trades[i].status = 2;
        offer1 = this.trades[i];
      }
      if (this.trades[i].trade_id == this.offer2Id) {
        this.trades[i].status = 2;
        offer2 = this.trades[i];
      }
    }
    this.pairs.push([offer1, offer2]);
  }

  getPairs() {
    var userPairs = [];
    for (var i = 0; i < this.pairs.length; i++) {
      if (this.logged.getUserId() == this.pairs[i][0].user_id) {
        userPairs.push(this.pairs[i]);
      }
    }
    return userPairs;
  }

  handleTrade(id1, id2, statusId) {
    for (var i = 0; i < this.trades.length; i++){
      if(this.trades[i].trade_id == id1 || this.trades[i].trade_id == id2){
        this.trades[i].status = statusId;
      }
    }
  }
}

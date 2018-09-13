import { Injectable } from '@angular/core';
import { IfStmt } from '../../node_modules/@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  selectedGenre: string = "";

  constructor() { }

  //Filters trades to only get the trades with the selected genre
  SearchFilter(trades) {

    //remove all closed trades
    for (var i = 0; i < trades.length; i++) {
      if(trades[i].status != 1){
        trades.splice(i,1);
      }
    }

    var filteredTrades = [];
    for (var i = 0; i < trades.length; i++) {
      if(trades[i].genre != this.selectedGenre){
        continue;
      }
      if(trades[i].status != 1){
        continue;
      }
      filteredTrades.push(trades[i]);
    }
    if(filteredTrades.length == 0){
      return trades;
    }
    return filteredTrades;
  }
}

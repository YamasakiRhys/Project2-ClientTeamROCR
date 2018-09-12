import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  selectedGenre: string = "";

  constructor() { }

  //Filters trades to only get the trades with the selected genre
  SearchFilter(trades) {
    var filteredTrades = [];
    for (var i = 0; i < trades.length; i++) {
      if(trades[i].genre != this.selectedGenre){
        continue;
      }
      filteredTrades.push(trades[i]);
    }
    if(filteredTrades.length == 0){
      return trades;
    }
    return filteredTrades;
  }

  SearchById(uesr_id){
    
  }
}

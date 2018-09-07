import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  selectedGenre: string = "";

  constructor() { }

  SearchFilter(trades) {
    console.log(this.selectedGenre);
    if (this.selectedGenre == "none"){
      return trades;
    }
    var filteredTrades = [];
    for (var i = 0; i < trades.length; i++) {
      if(trades[i].genre != this.selectedGenre){
        continue;
      }
      filteredTrades.push(trades[i]);
    }
    console.log(filteredTrades);
    return filteredTrades;
  }
}

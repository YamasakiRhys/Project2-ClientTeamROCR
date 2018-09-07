import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor() { }

  trades = [{ game_title: "Super Mario 64", genre: "Platformer", plot: "Princess Peach is captured and sealed into the walls of her own castle. Meanwhile the artwork around the castle seems to be coming alive.", img: "https://webgames.host/uploads/2017/06/super-mario-64.png", user_id: 3, genrePref: "RPG", status: 1 },
  { game_title: "Touhou Riverbed Soul Saver", genre: "Bullet Hell", plot: "Upon expanding the Hakurie Barrior into a pocket dimension, a large cold front sweeps Gensokyo warning a large flood being caused by someone.", img: "https://en.touhouwiki.net/images/thumb/4/44/RiverbedSoulSaverTitle.png/256px-RiverbedSoulSaverTitle.png", user_id: 2, genrePref: "Horror", status: 1 },
  { game_title: "Smite", genre: "MOBA", plot: "Legends, Dieties, Gods. A battleground for these powers have been made to spar.", img: "https://cdn.mmohuts.com/wp-content/uploads/2015/03/Smite_604x423.jpg", user_id: 4, genrePref: "MMO", status: 1 },
  { game_title: "Outside the Traditional World", genre: "Bullet Hell", plot: "The barrior weakens from an unknown power coming from the outside world.", img: "https://en.touhouwiki.net/images/thumb/e/eb/TriFocuser.png/256px-TriFocuser.png", user_id: 2, genrePref: "platformer", status: 1 }];

  getGenres() {
    var genres = [];
    var isDupe = false;
    for (var i = 0; i < this.trades.length; i++) {
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
}

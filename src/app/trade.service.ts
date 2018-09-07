import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor() { }

  trades = [{ game_title: "Super Mario 64", genre: "Platformer", plot: "Princess Peach is captured and sealed into the walls of her own castle. Meanwhile the artwork around the castle seems to be coming alive.", img: "https://webgames.host/uploads/2017/06/super-mario-64.png", user_name: "Ben", genrePref: "RPG", status:1 },
  { game_title: "Touhou Riverbed Soul Saver", genre: "Bullet Hell", plot: "Upon expanding the Hakurie Barrior into a pocket dimension, a large cold front sweeps Gensokyo warning a large flood being caused by someone.", img: "https://en.touhouwiki.net/images/thumb/4/44/RiverbedSoulSaverTitle.png/256px-RiverbedSoulSaverTitle.png", user_name: "John", genrePref: "Horror", status:1 },
  { game_title: "Smite", genre: "MOBA", plot: "Legends, Dieties, Gods. A battleground for these powers have been made to spar.", img: "https://cdn.mmohuts.com/wp-content/uploads/2015/03/Smite_604x423.jpg", user_name: "Sarrah", genrePref: "MMO", status:1 }];

}

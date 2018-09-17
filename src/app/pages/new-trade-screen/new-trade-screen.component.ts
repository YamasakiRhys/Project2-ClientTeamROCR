import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { Router } from '@angular/router';
import { TradeService } from '../../trade.service';
import * as AWS from 'aws-sdk/';
import * as S3 from 'aws-sdk/clients/s3';
import { SearchService } from '../../search.service';
import { HttpClient } from '@angular/common/http';
import { SecretsManager, Credentials } from 'aws-sdk';


@Component({
  selector: 'app-new-trade-screen',
  templateUrl: './new-trade-screen.component.html',
  styleUrls: ['./new-trade-screen.component.css']
})
export class NewTradeScreenComponent implements OnInit {

  constructor(private httpClient: HttpClient, private tradeServ: TradeService, private logged: LoggedInService, private router: Router, public search: SearchService) { }

  selectedFile: File = null;
  filePath;
  genre;
  game;

  fileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  selectedGenre(event) {
    this.genre = event.target.value;
  }

  selectedGame(event) {
    this.game = event.target.value;
  }
  //creates a new game and adds it to the DB
  makeGame(rTitle, rPlot) {
    if (!rTitle || !rPlot || !this.selectedFile || !this.genre) {
      alert("Please fill in all boxes and upload an image");
      return;
    }
    this.makePath();
    this.uploadImage(this.selectedFile);
    var game = {
      title: rTitle,
      image: "https://s3.us-east-2.amazonaws.com/project-rocr-images/" + this.filePath,
      plot: rPlot,
      genreId: this.genre
    }
    this.httpClient.post('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/games', game).subscribe(x => {
      this.search.setAllGames();
    });
  }

  //add the new trade to the DB
  makeTrade(rDesc) {
    var trade = {
      userId: this.logged.getUserId(),
      gameId: parseInt(this.game),
      description: rDesc
    }
    this.httpClient.post('http://ec2-52-15-53-206.us-east-2.compute.amazonaws.com:8080/requests', trade).subscribe(x => {
      this.tradeServ.setTrades();
      this.tradeServ.setRequests();
      this.router.navigate(['/loggedin/user']);
    });
  }
  //Creates a name for the image file
  makePath() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 25; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    text += ".png"
    this.filePath = text;
  }

  backUser(): void {
    this.router.navigate(['/loggedin/user']);
  }
  
  //uploads the given image file to S3bucket
  uploadImage(img) {
    var s3 = new AWS.S3({apiVersion: '2006-03-01'})
    const bucket = new AWS.S3(
      {
        accessKeyId: s3.config.accessKeyId,
        secretAccessKey: s3.config.secretAccessKey,
        region: 'us-east-1'
      }
    );

    console.log(bucket);

    const params = {
      Bucket: 'project-rocr-images',
      Key: this.filePath,
      Body: img
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

  ngOnInit() {
    this.search.setAllGenres();
    this.search.setAllGames();
    this.logged.navNum = 11;
  }
}

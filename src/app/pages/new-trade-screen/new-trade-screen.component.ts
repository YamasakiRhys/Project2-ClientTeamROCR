import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import {TradeService} from '../../trade.service';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Component({
  selector: 'app-new-trade-screen',
  templateUrl: './new-trade-screen.component.html',
  styleUrls: ['./new-trade-screen.component.css']
})
export class NewTradeScreenComponent implements OnInit {

  constructor(private tradeServ: TradeService, private logged: LoggedInService, private login: LoginService, private router: Router) { }

  //add the new trade to the DB (array for now)
  makeTrade(rTitle, rGenre, rPlot, rImage, rGenrePref) {
    this.tradeServ.trades.push({ trade_id: this.tradeServ.trades.length + 1, user_id: this.logged.getLoggedInUser().user_id, game_title: rTitle, genre: rGenre, plot: rPlot, img: rImage, genrePref: rGenrePref, status: 1});
    this.router.navigate(['/loggedin/user']);
  }

  backUser(): void{
    this.router.navigate(['/loggedin/user']);
  }

  ngOnInit() {
    this.logged.navNum = 11;
    const bucket = new S3(
      {
        accessKeyId: '',
        secretAccessKey: '',
        region: 'us-east-1'
      }
    );
     
    const params = {
      Bucket: 'project2images',
      Key: 'Monday.txt',
      Body: 'C:/Users/Richard/Desktop/Monday.txt'
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

}

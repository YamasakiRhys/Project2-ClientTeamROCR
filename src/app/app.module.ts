import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GamesComponent } from './games/games.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { MatButtonModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { UserScreenComponent } from './pages/user-screen/user-screen.component';
import { ManagerScreenComponent } from './pages/manager-screen/manager-screen.component';
import { RegisterScreenComponent } from './pages/register-screen/register-screen.component';
import { RecentTradesComponent } from './recent-trades/recent-trades.component';
import { NewTradeScreenComponent } from './pages/new-trade-screen/new-trade-screen.component';
import { UsersListScreenComponent } from './pages/users-list-screen/users-list-screen.component';
import { MyTradesScreenComponent } from './pages/my-trades-screen/my-trades-screen.component';
import { TradingScreenComponent } from './pages/trading-screen/trading-screen.component';
import { HandleOffersScreenComponent } from './pages/handle-offers-screen/handle-offers-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GamesComponent,
    ContactInfoComponent,
    HomeScreenComponent,
    UserScreenComponent,
    ManagerScreenComponent,
    RegisterScreenComponent,
    RecentTradesComponent,
    NewTradeScreenComponent,
    UsersListScreenComponent,
    MyTradesScreenComponent,
    TradingScreenComponent,
    HandleOffersScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
export class MyOwnCustomMaterialModule { }

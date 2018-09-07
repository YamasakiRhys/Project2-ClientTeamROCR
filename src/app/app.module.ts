import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GamesComponent } from './games/games.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import { UserScreenComponent } from './pages/user-screen/user-screen.component';
import { ManagerScreenComponent } from './pages/manager-screen/manager-screen.component';
import { RegisterScreenComponent } from './pages/register-screen/register-screen.component';
import { RecentTradesComponent } from './recent-trades/recent-trades.component';
import { NewTradeScreenComponent } from './pages/new-trade-screen/new-trade-screen.component';

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
    NewTradeScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
export class MyOwnCustomMaterialModule { }

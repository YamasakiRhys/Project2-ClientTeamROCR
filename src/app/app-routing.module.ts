import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { UserScreenComponent } from './pages/user-screen/user-screen.component';
import { ManagerScreenComponent } from './pages/manager-screen/manager-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//redirects the page based on the URL and places the cooresponding component in <router-outlet></router-outlet> in app.component.html
const routes: Routes = [
  { path: '', component: HomeScreenComponent}, //This is the default. used when no other paths are found
  { path: 'loggedin/user', component: UserScreenComponent},
  { path: 'loggedin/manager', component: ManagerScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

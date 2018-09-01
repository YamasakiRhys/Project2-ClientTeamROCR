import { HomeScreenComponent } from './home-screen/home-screen.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeScreenComponent},
  { path: 'logedin', component: UserScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

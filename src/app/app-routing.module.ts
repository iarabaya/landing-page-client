import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TripHistoryComponent } from './pages/trip-history/trip-history.component';
import { TripStatusComponent } from './pages/trip-status/trip-status.component';
import { TripRequestComponent } from './pages/trip-request/trip-request.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'request',
    component: TripRequestComponent
  },
  {
    path: 'history',
    component: TripHistoryComponent
  },
  {
    path: 'status',
    component: TripStatusComponent
  },
  {
    path:'**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RequestComponent } from './pages/request/request.component';
import { HistoryComponent } from './pages/history/history.component';
import { StatusComponent } from './pages/status/status.component';

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
    component: RequestComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'status',
    component: StatusComponent
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

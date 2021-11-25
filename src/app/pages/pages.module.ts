import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TripRequestComponent } from './trip-request/trip-request.component';
import { TripHistoryComponent } from './trip-history/trip-history.component';
import { TripStatusComponent } from './trip-status/trip-status.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    TripRequestComponent,
    TripHistoryComponent,
    TripStatusComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }

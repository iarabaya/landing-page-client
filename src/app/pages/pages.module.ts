import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { RequestComponent } from './request/request.component';
import { StatusComponent } from './status/status.component';
import { HistoryComponent } from './history/history.component';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RequestComponent,
    StatusComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RequestComponent,
    StatusComponent,
    HistoryComponent
  ]
})
export class PagesModule { }

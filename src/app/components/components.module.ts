import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RequestFormComponent } from './request-form/request-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    RequestFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LoginFormComponent
  ]
})
export class ComponentsModule { }

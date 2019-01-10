import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './ui/login/login.component';
import {RegisterComponent} from './ui/register/register.component';
import {HomeComponent} from './ui/home.component';
import {ContentComponent} from './ui/content/content.component';
import {FooterComponent} from './ui/footer/footer.component';
import {HeaderComponent} from './ui/header/header.component';
import {LeftSideBarComponent} from './ui/left-sidebar/left-sidebar.component';
import {ControlSidebarComponent} from './ui/control-sidebar/control-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ControlSidebarComponent,
    LeftSideBarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

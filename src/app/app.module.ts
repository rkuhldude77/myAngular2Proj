import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HTMLComponent } from './html/html.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NavbarComponent } from './navbar.component';
import { PHPComponent } from './php/php.component';
import {Routing} from "./app.routing.";
import {HTMLRouting} from "./html/html.routing";
import {PHPRouting} from "./php/php.routing";
import {JavascriptRouting} from "./javascript/javascript.routing";


@NgModule({
  declarations: [
    AppComponent,
    HTMLComponent,
    HomeComponent,
    JavascriptComponent,
    NavbarComponent,
    PHPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HTMLRouting,
    PHPRouting,
    JavascriptRouting,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

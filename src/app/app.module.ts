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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

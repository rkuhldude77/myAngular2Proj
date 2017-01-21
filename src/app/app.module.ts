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
import { GuessingGameComponent } from './html/guessing-game/guessing-game.component';
import { InlineFramesComponent } from './html/inline-frames/inline-frames.component';
import { InterestsComponent } from './html/interests/interests.component';
import { LittleBoxesComponent } from './html/little-boxes/little-boxes.component';
import { MapsComponent } from './html/maps/maps.component';
import { MyFriendsComponent } from './html/my-friends/my-friends.component';
import { PapaBComponent } from './html/papa-b/papa-b.component';
import { SportsComponent } from './html/sports/sports.component';
import { ResumeComponent } from './resume/resume.component';
import {AccordionModule, AccordionConfig, TabsModule, TabsetConfig} from "ng2-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    HTMLComponent,
    HomeComponent,
    JavascriptComponent,
    NavbarComponent,
    PHPComponent,
    GuessingGameComponent,
    InlineFramesComponent,
    InterestsComponent,
    LittleBoxesComponent,
    MapsComponent,
    MyFriendsComponent,
    PapaBComponent,
    SportsComponent,
    ResumeComponent
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    JavascriptRouting,
    PHPRouting,
    HTMLRouting,
    TabsModule
  ],
  providers: [
    AccordionConfig,
    TabsetConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

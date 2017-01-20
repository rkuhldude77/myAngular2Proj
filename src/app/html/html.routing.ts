import {RouterModule} from '@angular/router';

import {HTMLComponent} from './html.component';
import {GuessingGameComponent} from "./guessing-game/guessing-game.component";
import {InlineFramesComponent} from "./inline-frames/inline-frames.component";
import {InterestsComponent} from "./interests/interests.component";
import {LittleBoxesComponent} from "./little-boxes/little-boxes.component";
import {MapsComponent} from "./maps/maps.component";
import {MyFriendsComponent} from "./my-friends/my-friends.component";
import {PapaBComponent} from "./papa-b/papa-b.component";
import {SportsComponent} from "./sports/sports.component";

export const HTMLRouting = RouterModule.forChild([
  {path: 'html', component: HTMLComponent},
  {path: 'guessingGame', component: GuessingGameComponent},
  {path: 'inlineFrames', component: InlineFramesComponent},
  {path: 'interests', component: InterestsComponent},
  {path: 'littleBoxes', component: LittleBoxesComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'myFriends', component: MyFriendsComponent},
  {path: 'papaB', component: PapaBComponent},
  {path: 'sports', component: SportsComponent},
  {path: '**', redirectTo: ''}

])

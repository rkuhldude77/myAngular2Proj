import { Router, RouterModule } from '@angular/router';

import {HTMLComponent} from "./html/html.component";
import {HomeComponent} from "./home/home.component";
import {JavascriptComponent} from "./javascript/javascript.component";
import {PHPComponent} from "./php/php.component";


export const Routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'html', component: HTMLComponent},
  {path: 'php', component: PHPComponent},
  {path: 'javascript', component: JavascriptComponent}
])

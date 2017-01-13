import { Router, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";

export const Routing = RouterModule.forRoot([
  {path: '', component: HomeComponent}
])

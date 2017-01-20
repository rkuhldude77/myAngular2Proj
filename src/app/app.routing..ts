import { Router, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ResumeComponent} from "./resume/resume.component";

export const Routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'resume', component: ResumeComponent}
])

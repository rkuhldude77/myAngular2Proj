import {RouterModule} from '@angular/router';

import {PHPComponent} from './php.component';
import {PHPHomeComponent} from "./home/home.component";

export const PHPRouting = RouterModule.forChild([
  {path: 'php', component: PHPComponent},
  {path: 'phpHome', component: PHPHomeComponent}
])
